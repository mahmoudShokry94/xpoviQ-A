import React from 'react';
import './LandingPage.style.css'
import { Link } from 'react-router-dom'
const LandingPage = () => {
    return (
        <div className="landig-page d-flex align-items-center justify-content-center">
            <Link to="/QusetionsPage">
                <button className="btn btn-primary">
                    generate business plan
                </button>
            </Link>
        </div>
    );
}

export default LandingPage;
