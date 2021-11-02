import React from 'react';

import Search from '@material-ui/icons/Search';
import ViewList from '@material-ui/icons/ViewList';
import gridView from '../../assets/svg/grid_view.svg';

import {
    FilterContainerFlex,
    BoxInputSearch,
    BoxFilter,
    SelectFilter,
    LabelSearch,
    ImgIcon,
} from './style';
import { Input } from '../UI';

export default function Filters({ isGrid, setIsGrid }){
    return(
        <FilterContainerFlex>
                <BoxInputSearch>
                    <Input
                        id="search"
                        type="text"
                        placeholder="Pesquisar"
                    />

                    <LabelSearch htmlFor="search">
                        <Search />
                    </LabelSearch>
                </BoxInputSearch>

                <BoxFilter>
                    <SelectFilter name="filter_files">
                        <option value="all">Todos</option>
                        <option value="photos">Fotos</option>
                        <option value="gifs">Gifs</option>
                        <option value="videos">Vídeos</option>
                        <option value="sound">Áudios</option>
                        <option value="documents">Documentos</option>
                    </SelectFilter>

                    {
                        isGrid ? (
                            <ViewList
                                style={{ cursor: 'pointer', fontSize: '32px' }}
                                onClick={() => setIsGrid(!isGrid)}
                            />
                        ) : (
                            <ImgIcon
                                src={gridView}
                                alt="Ícone de uma ilustração de grid layout"
                                onClick={() => setIsGrid(!isGrid)}
                            />
                        )
                    }
                    
                </BoxFilter>
        </FilterContainerFlex>
    );
}