import React, { useEffect } from 'react';
import instance from 'src/api/axios';
import styled from 'styled-components';

const SelectedAnniversaryInfo = (selectedAnniversary: any) => {
  const deleteAnniversaries = async () => {
    try {
      const response = await instance.delete(
        `/api/user/me/anniversary/${selectedAnniversary.selectedAnniversary.id}`
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
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
      <div onClick={deleteAnniversaries}>삭제하기</div>
    </AnniversaryInfoContainer>
  );
};

export default SelectedAnniversaryInfo;
const AnniversaryInfoContainer = styled.div``;
