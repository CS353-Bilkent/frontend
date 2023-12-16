import React, { useState, useEffect } from 'react';

// Main PortfolioPage Component
const PortfolioPage = ({ artistId }) => {
    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                const response = await fetch(`/api/artworks?artistId=${artistId}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setArtworks(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchArtworks();
    }, [artistId]);

    return (
        <div>
            {artworks.map(artwork => (
                <Artwork key={artwork.artwork_id} artwork={artwork} />
            ))}
        </div>
    );
};

// Artwork Component
const Artwork = ({ artwork }) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div onClick={() => setModalOpen(true)}>
            <h3>{artwork.title}</h3>
            <p>{artwork.description}</p>
            {modalOpen && (
                <ArtworkModal artwork={artwork} closeModal={() => setModalOpen(false)} />
            )}
        </div>
    );
};

// ArtworkModal Component
const ArtworkModal = ({ artwork, closeModal }) => {
    const [description, setDescription] = useState(artwork.description);
    const [bids, setBids] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchBids = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`/api/bids?artworkId=${artwork.artwork_id}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setBids(data);
            } catch (error) {
                console.error('Fetch error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBids();
    }, [artwork.artwork_id]);

    const handleDescriptionUpdate = async () => {
        try {
            const response = await fetch(`/api/artworks/update/${artwork.artwork_id}`, {
                method: 'PUT',
                body: JSON.stringify({ description }),
                headers: { 'Content-Type': 'application/json' }
            });
            if (!response.ok) throw new Error('Network response was not ok');
            closeModal();
        } catch (error) {
            console.error('Update error:', error);
        }
    };

    const handleBidApproval = async (bidId, isApproved) => {
        try {
            await fetch(`/api/bids/update/${bidId}`, {
                method: 'PUT',
                body: JSON.stringify({ approved: isApproved }),
                headers: { 'Content-Type': 'application/json' }
            });
            // Update the bid list locally or re-fetch
        } catch (error) {
            console.error('Bid update error:', error);
        }
    };

    return (
        <div>
            <h2>Edit Artwork</h2>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            <button onClick={handleDescriptionUpdate}>Save Changes</button>
            <button onClick={closeModal}>Cancel</button>

            <h3>Bids</h3>
            {isLoading ? <p>Loading bids...</p> : bids.map(bid => (
                <div key={bid.bid_id}>
                    <p>{bid.bidder_name}: ${bid.amount}</p>
                    <button onClick={() => handleBidApproval(bid.bid_id, true)}>Approve</button>
                    <button onClick={() => handleBidApproval(bid.bid_id, false)}>Reject</button>
                </div>
            ))}
        </div>
    );
};

export default PortfolioPage;
