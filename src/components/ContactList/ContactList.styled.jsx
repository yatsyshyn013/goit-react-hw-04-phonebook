import styled from '@emotion/styled'

export const List = styled.ul`
    font-size: 15px;
    margin: 0;
    margin-bottom: 30px;
    margin-top: 15px;
`

export const ListItem = styled.li`
    :not(:last-of-type) {
        margin-bottom: 5px;
        
    }
`

export const ContactListBtn = styled.button`
    margin-left: 10px;
    font-size: 10px;
     background-color: #fff;
    border: 1px grey solid;
    border-radius: 4px;

    :hover {
        background-color: #337ff8;
        color: #fff;
    }
`