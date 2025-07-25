import React from 'react';
import { Link } from "react-router";

const Friends = () => {
  return (
    <div className="p-4">
      <Link to="/" className="text-blue-600 hover:underline">
        ← Back to Home, Still in development
      </Link>

      {/* Your other Friends page content here */}
    </div>
  );
};

export default Friends;

