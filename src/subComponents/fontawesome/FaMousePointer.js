import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMousePointer } from '@fortawesome/free-solid-svg-icons'

const FaMousePointer = () => {

    const Hover =styled.div`
  &:hover{
    color: rgba(126, 148, 217, 4);

}
  `
  return ( 

    <div style={{ textAlign: "center"}}>
        <div style={{ fontSize:"100px"}}>
            <div style={{color:"white"}}>
                  <Hover>
        <FontAwesomeIcon icon={faMousePointer} />
              </Hover>
        </div>
    </div>
    </div>
    );
}
export default FaMousePointer

