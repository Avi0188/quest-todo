import React, { useState } from 'react';
import { AlignLeft, MessageSquare, MoreHorizontal } from 'react-feather';
import Dropdown from '../Dropdown/Dropdown';
import './Card.css';

const Card = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className='card'>
      <div className='card_top'>
        <div className="card_top_labels">
          <div className='cards_inside'>
            <div className='card_title'>
              Redux
            </div>
          </div>
          <div className='card_top_more' onClick={() => setShowDropdown(true)}>
            <MoreHorizontal />
            {showDropdown && (
              <Dropdown onClose={() => setShowDropdown(false)}>
                <div className='card_dropdown'>
                  <p>Delete Card</p>
                </div>
              </Dropdown>
            )}
          </div>
        </div>
      </div>

      <div className='card_footer'>
        <p><AlignLeft /> <MessageSquare /></p>
      </div>
    </div>
  );
};

export default Card;
