import React, {Component} from 'react';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import TopTrending from '../components/TopTrending';
import AuthLayout from '../layout/AuthLayout';

class Search extends Component {
    state = {
        isSearched: false,
        value: '',
    };

    handleSearch = (value) => {
        if (value !== '') {
            this.setState({
                isSearched: true,
                value,
            });
        } else {
            this.setState({isSearched: false});
        }
    };

    render() {
        const {isSearched, value} = this.state;
        return (
            <AuthLayout>
                <SearchBar
                    onSearch={(value) => {
                        this.handleSearch(value);
                    }}
                />
                {isSearched && <SearchResult value={value} />}
                <TopTrending />
            </AuthLayout>
        );
    }
}

export default Search;
