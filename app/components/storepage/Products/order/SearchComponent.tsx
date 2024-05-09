import React from 'react';

interface SearchComponentProps {
    searchCourse: string;
    courseSearchUserFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ searchCourse, courseSearchUserFunction }) => {
    return (
        <header className="App-header">
            <h2>ORDER NOW</h2>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for scooter..."
                    value={searchCourse}
                    onChange={courseSearchUserFunction}
                />
            </div>
        </header>
    );
}

export default SearchComponent;