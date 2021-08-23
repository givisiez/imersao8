import styled from 'styled-components';

export const Container = styled.section`
    margin: 0px auto;
    width: 960px;
    max-width: 960px;
`;

export const TitleContent = styled.section`
    display: flex;
    justify-content: space-between;
`;

export const Title = styled.h1`
    font-size: 23px;
    font-family: sans-serif;
    margin: 10px 15px;
    color: #1d1e1e;
`;

export const ActionButton = styled.section`    
    margin: 5px;    
`;

export const SuccessButton = styled.button`
    background-color: #fff;
    color: #198754;
    padding: 5px 8px;
    border: 1px solid #198754;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover {
        background-color: #198754;
        color: #fff;
    }
    margin-left: 5px;    
`;

export const PrimaryButton = styled.button`
    background-color: #fff;
    color: #0d6efd;
    padding: 5px;
    border: 1px solid #0d6efd;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover {
        background-color: #0d6efd;
        color: #fff;
    }
    margin: 0 5px;  
`;

export const WarningButton = styled.button`
    background-color: #fff;
    color: #ffc107;
    padding: 5px;
    border: 1px solid #ffc107;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover {
        background-color: #ffc107;
        color: #fff;
    }
    margin: 0 5px; 
`;

export const DangerButton = styled.button`
    background-color: #fff;
    color: #dc3545;
    padding: 5px;
    border: 1px solid #dc3545;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover {
        background-color: #dc3545;
        color: #fff;
    }
    margin: 0 5px;
`;

export const InfoButton = styled.button`
    background-color: #fff;
    color: #0dcaf0;
    padding: 5px;
    border: 1px solid #0dcaf0;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover {
        background-color: #0dcaf0;
        color: #fff;
    }
    margin: 0 5px;
`;

export const Table = styled.table`    
    width: 100%;
    thead tr th, tbody tr td {
        font-family: sans-serif;
    }
    thead tr th {
        text-transform: uppercase;
        background-color: #e5e5e5;
        color: #3e3e3e;
        padding: 10px;
    } 
    tbody tr td {        
        background-color: #f6f6f6;
        color: #3e3e3e;
        padding: 2px; 
    }
`;

export const AlertDanger = styled.p`    
  background-color: #f8d7da;
  color: #842029;
  margin: 20px 0;
  border: 1px solid #f5c2c7;
  border-radius: 4px;
  padding: 7px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const AlertSuccess = styled.p`    
    background-color: #d1e7dd;
    color: #0f5132;
    margin: 20px 0;
    border: 1px solid #badbcc;
    border-radius: 4px;
    padding: 7px;
    font-family: Arial, Helvetica, sans-serif;
`;