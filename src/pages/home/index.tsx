import { useEffect, useState } from 'react'
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Header } from '../../components/Header'
import { ModalInfo } from '../../components/modalInfo'
import { 
    Container,
    Content,
    FilterForm,
    TableContent,
    Loading
} from './styles'
import { UserData } from '../../types';

export function Home() {
    const [dataFetching, setDataFeching] = useState<UserData[]>([]);
    const [dataFetchingBackup, setDataFechingBackup] = useState<UserData[]>([]);
    const [isFetching, setIsFeching] = useState(true);
    const [error, setError] = useState(null);
    const [isModalInfoOpen, setIsModalInfoOpen] = useState(false)
    const [dataUser, setDataUser] = useState<UserData>();
    const [search, setSearch] = useState('');
    const [searchState, setSearchState] = useState('');
    
    function handleOpenModalInfo(userSelected: UserData) {
        setDataUser(userSelected);
        setIsModalInfoOpen(true);
    }

    function handleCloseModalInfo() {
        setIsModalInfoOpen(false);
    }

    useEffect(() => {
        axios.get('https://randomuser.me/api/', {
            params: {
                results: 10,
                nat: 'br'
            }
        })
        .then(response => {
            setDataFeching(response.data.results);
            setDataFechingBackup(response.data.results);
        })
        .catch(error => {
            setError(error)
        })
        .finally(() => {
            setIsFeching(false);
        }) 
    }, []);

    useEffect(() => {
        if (search.length != 0) {
            const filter = dataFetching.filter(a => 
                a.name.first.toUpperCase().indexOf(search.toUpperCase()) >= 0 || 
                a.name.last.toUpperCase().indexOf(search.toUpperCase()) >= 0
            );
            setDataFeching(filter)
        } else {
            setDataFeching(dataFetchingBackup);
        }
    }, [search]);

    useEffect(() => {
        if (searchState != '') {
            const filterState = dataFetching.filter(a => a.location.state.toUpperCase() === searchState.toUpperCase())
            setDataFeching(filterState)
        } else {
            setDataFeching(dataFetchingBackup)
        }
    }, [searchState])

    return (
        <Container>
            <Header />
            <Content>
                <h1>Lista de alunos do curso</h1>
                {
                    isFetching ? (
                        <Loading>
                            <ReactLoading type='spin' color='#FFFFFF'/>
                        </Loading>
                    ):(
                        <>
                            <FilterForm>
                                <div>
                                    <label htmlFor="nome">Pesquisar</label>
                                    <input 
                                        type="text" 
                                        id='nome' 
                                        placeholder='Nome do aluno'
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="nacionalidade">Nacionalidade</label>
                                    <select 
                                        name="nacionalidade" 
                                        id="nacionalidade"
                                        onChange={(e) => setSearchState(e.target.value)}
                                        value={searchState}
                                    >
                                        <option value="">Todas</option>
                                        {
                                            dataFetching.map((e, index) => {
                                                return(
                                                    <option 
                                                        key={index}
                                                        value={e.location.state}>
                                                        {e.location.state}
                                                    </option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </FilterForm>
                            <TableContent>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Sexo</th>
                                        <th>Nacionalidade</th>
                                        <th>Ação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        dataFetching.map((e, index) => {
                                            return(
                                                <tr key={index}>
                                                    <td>{`${e.name.first} ${e.name.last}`}</td>
                                                    <td>{e.gender}</td>
                                                    <td>{`${e.nat} | ${e.location.state}`}</td>
                                                    <td>
                                                        <button onClick={() => handleOpenModalInfo(e)}>Visualizar</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    
                                </tbody>
                            </TableContent>
                        </>
                    )
                }
                
            </Content>
            <ModalInfo 
                    isOpen={isModalInfoOpen}
                    onRequestClose={handleCloseModalInfo}
                    userSelected={dataUser}
            />
            <div></div>
        </Container>
    )
}