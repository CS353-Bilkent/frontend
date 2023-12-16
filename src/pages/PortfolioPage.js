import React, { useState, useEffect } from 'react';
import axiosInstance from '../service/axiosInterceptor';

// Main PortfolioPage Component
const PortfolioPage = ({ artistId }) => {
    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                const response = await axiosInstance.get(`/api/artworks?artistId=${artistId}`);
                setArtworks(response.data);
                console.log("data", response.data);
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
                const response = await axiosInstance.get(`/api/bids?artworkId=${artwork.artwork_id}`);
                setBids(response.data);
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
            await axiosInstance.put(`/api/artworks/update/${artwork.artwork_id}`, {
                description
            });
            closeModal();
        } catch (error) {
            console.error('Update error:', error);
        }
    };

    const handleBidApproval = async (bidId, isApproved) => {
        try {
            await axiosInstance.put(`/api/bids/update/${bidId}`, {
                approved: isApproved
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
