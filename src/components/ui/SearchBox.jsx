import React, { useState, useEffect, useCallback } from 'react';
import { Search, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, clearSearchTerm } from '../../store/slices/filterSlice';
import { debounce } from '../utils/helpers';

const SearchBox= () => {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state) => state.filter);
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  // Debounced search to avoid too many redux actions
  const debouncedSearch = useCallback(
    debounce((term) => {
      dispatch(setSearchTerm(term));
    }, 300),
    [dispatch]
  );

  // Update local state when input changes
  const handleChange = (e) => {
    const value = e.target.value;
    setLocalSearchTerm(value);
    debouncedSearch(value);
  };

  // Clear search
  const handleClear = () => {
    setLocalSearchTerm('');
    dispatch(clearSearchTerm());
  };

  // Sync local state with redux state
  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  return (
    <div className="relative w-full max-w-md">
      <div className="relative flex items-center">
        <Search className="absolute left-3 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search posts..."
          value={localSearchTerm}
          onChange={handleChange}
          className="w-full pl-10 pr-10 py-2 rounded-full bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
        />
        {localSearchTerm && (
          <button
            onClick={handleClear}
            className="absolute right-3 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBox;