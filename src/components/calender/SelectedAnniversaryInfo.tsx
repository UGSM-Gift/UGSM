import React, { useEffect } from 'react';
import styled from 'styled-components';

const SelectedAnniversaryInfo = (selectedAnniversary: any) => {
  if (!selectedAnniversary) return null;
  return (
    <AnniversaryInfoContainer>
      {selectedAnniversary.imageUrl && (
        <img
          src={selectedAnniversary.selectedAnniversary.imageUrl}
          alt={selectedAnniversary.selectedAnniversary.name}
        />
      )}
      <h3>{selectedAnniversary.selectedAnniversary.name}</h3>
      <p>{selectedAnniversary.selectedAnniversary.date}</p>
    </AnniversaryInfoContainer>
  );
};

export default SelectedAnniversaryInfo;
const AnniversaryInfoContainer = styled.div``;
