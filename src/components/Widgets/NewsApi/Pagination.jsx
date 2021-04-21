import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import styled from "styled-components";

const Wrapper = styled.section`

    margin-top: 30px;

    .news-pagination {
        margin-left: auto;
        float: right;
        .MuiPaginationItem-page {
            outline: none;
            color: white;
            border: 1px solid grey;
        }
            .Mui-selected {
                background: red;
                color: white !important;
            }

            .MuiPaginationItem-ellipsis {
                color: white;
            }
    }
`;

export default function PaginationControlled(props) {
  const handleChange = (event, value) => {
    window.scrollTo(0, 0);
    props.setPagination(value);
  };

  return (
    <Wrapper >
      <Pagination className="news-pagination" count={props.totalPage - 1} page={props.pagination} variant="outlined" onChange={handleChange} shape="rounded" />
    </Wrapper>
  );
}
