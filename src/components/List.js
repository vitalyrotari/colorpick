import styled from 'styled-components';
import Pill from './Pill';
import Tile from './Tile';

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  ${Pill} {
    margin: 0 8px 16px;
  }

  ${Tile} {
    margin: 0 12px 24px;
  }
`;

export default List;