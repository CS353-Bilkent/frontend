import React, { useState, useEffect, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import axiosInstance from '../service/axiosInterceptor';
import { UserContext } from '../contexts/UserContext';
import '../styles.css';

// Artwork Component
const Artwork = ({ artwork, displayImage }) => {
    console.log("Artwork prop:", artwork);
    console.log("display Image:", displayImage);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div onClick={() => setModalOpen(true)}>
            <h3>{artwork.artworkName}</h3>
            <p>{artwork.artworkDescription}</p>
            <img src={`data:image/jpeg;base64,${displayImage}`} alt={artwork.artworkName} />
            {modalOpen && (
                <ArtworkModal artwork={artwork} closeModal={() => setModalOpen(false)} />
            )}
        </div>
    );
};

Artwork.propTypes = {
    artwork: PropTypes.object.isRequired,
    displayImage: PropTypes.string.isRequired,
};

// ArtworkModal Component
const ArtworkModal = ({ artwork, displayImage, closeModal }) => {
    const [description, setDescription] = useState(artwork.artworkDescription);
    const [bids, setBids] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchBids = useCallback(async () => {
        setIsLoading(true);
        setError('');
        try {
            const response = await axiosInstance.get(`/payments?artworkId=${artwork.artwork_id}`);
            setBids(response.data);
        } catch (error) {
            setError('Bids could not be fetched.');
            console.error('Fetch error:', error);
        } finally {
            setIsLoading(false);
        }
    }, [artwork.artwork_id]);

    useEffect(() => {
        fetchBids();
    }, [fetchBids]);

    const handleDescriptionUpdate = async () => {
        setError('');
        try {
            await axiosInstance.put(`/art/update/${artwork.artwork_id}`, {
                description
            });
            closeModal();
        } catch (error) {
            setError('Could not update description.');
            console.error('Update error:', error);
        }
    };

    const handleBidApproval = async (bidId, isApproved) => {
        setError('');
        try {
            await axiosInstance.put(`/payments/approve/${bidId}`, { approved: isApproved });
            fetchBids();
        } catch (error) {
            setError('Could not update bid.');
            console.error('Bid update error:', error);
        }
    };

    return (
        <div>
            <h2>Edit Artwork</h2>
            <img src={displayImage} alt={artwork.artworkName} />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            <button onClick={handleDescriptionUpdate}>Save Changes</button>
            <button onClick={closeModal}>Cancel</button>

            {error && <p>Error: {error}</p>} {/* Hata mesajını göster */}

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

ArtworkModal.propTypes = {
    artwork: PropTypes.object.isRequired,
    displayImage: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
};

// Main PortfolioPage Component
const PortfolioPage = () => {
    const [artworks, setArtworks] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        console.log('User context:', user);

        if (!user) {
            console.log('User context is not available');
            return;
        }

        const fetchArtworks = async () => {
            try {
                const response = await axiosInstance.get('/art/my');
                console.log("API Response:", response.data); // Bu satır eklendi
                if (Array.isArray(response.data.data)) {
                    setArtworks(response.data.data);
                } else {
                    console.error('Expected an array of artworks, but got:', response.data);
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchArtworks();
    }, [user]);

    return (
        <div className="artwork-container">
            {Array.isArray(artworks) && artworks.map((artworkData, index) => (
                <Artwork key={index} artwork={artworkData.artwork} displayImage={artworkData.displayImage} />
            ))}
        </div>
    );
};

export default PortfolioPage;