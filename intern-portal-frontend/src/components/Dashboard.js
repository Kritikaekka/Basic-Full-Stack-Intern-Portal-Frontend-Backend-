import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state || !location.state.internName) {
    return (
      <div style={{ padding: 20 }}>
        <p style={{ color: 'red' }}>No user data. Please log in first.</p>
        <button onClick={() => navigate('/')}>Go to Login</button>
      </div>
    );
  }

  const { internName, referralCode, totalDonations } = location.state;

  return (
    <div className='dashboard'>
      <h2 className='head' >DASHBOARD</h2>
      <div className='box'>
      <p><strong>Intern Name</strong><br/></p><p className='id'> {internName}</p>
      <p><strong>Referral Code</strong><br/> </p><p className='id'> {referralCode}</p>
      <p><strong>Total Donations Raised</strong><br/> </p><p className='id'> ${totalDonations}</p>
</div>
      <div className='box2'>
        <h3>Rewards / Unlockables</h3>
        <ul>
          
          <li>Raise ₹1000 in Donations: <b>Get an Exclusive Awareness Badge </b></li><br/>
          <li>Refer 3 friends to join the campaign: <b>Get a chance to join group events</b></li><br/>
          <li>Raise ₹5000 in Donations: <b>Get the She Can Warrior Certificate</b></li><br/>
        </ul>
      </div>
      
    </div>
  );
};

export default Dashboard;
