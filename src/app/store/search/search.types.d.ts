export interface SearchResult {
    location: string;
    key: string;
}

export interface SearchState {
    results: SearchResult[];
    loading: boolean;
    value: string;
}