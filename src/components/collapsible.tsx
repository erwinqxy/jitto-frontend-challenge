import React, { useState } from "react";
import { PropsWithChildren } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons'

interface IProps {
  open?: boolean;
  title: string;
}

const Collapsible: React.FC<PropsWithChildren<IProps>> = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="card">
        <div>
          <div className="p-3 border-bottom d-flex justify-content-between" onClick={handleFilterOpening}>
            <h6 className="font-weight-bold">{title}</h6>
            <button type="button" className="btn">
              {!isOpen ? (
                <FontAwesomeIcon icon={faChevronDown} />
              ) : (
                <FontAwesomeIcon icon={faChevronUp} />
              )}
            </button>
          </div>
        </div>

        <div className="border-bottom">
          <div>{isOpen && <div className="p-3">{children}</div>}</div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;