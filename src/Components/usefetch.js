import { useEffect, useState } from 'react';

const useCategoriesAndSubCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoriesAndSubCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://fidni.tn/api/categories');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (!data.data) {
          throw new Error('Malformed response data');
        }

        const categoriesData = data.data;
        setCategories(categoriesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories and subcategories:', error);
        setError(error.message || 'Error fetching data');
        setLoading(false);
      }
    };

    fetchCategoriesAndSubCategories();
  }, ['https://fidni.tn/api/categories?populate=*']);

  return { loading, error, categories };
};

export default useCategoriesAndSubCategories;
