import React, { useState } from 'react';

const FetchImage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    setImageUrl(null);

    try {
      const response = await fetch('https://picsum.photos/200/300');
      setImageUrl(response.url);
    } catch {
      setImageUrl(null);
    } finally {
      setLoading(false);
    }
  };

  let content;
  if (loading) {
    content = <p>Waiting...</p>;
  } else if (imageUrl) {
    content = <img src={imageUrl} alt="Fetched from Picsum" />;
  } else {
    content = <p>No image available</p>;
  }

  return (
    <div>
      <button onClick={handleClick}>Fetch Image</button>
      <div>{content}</div>
    </div>
  );
};

export default FetchImage;
