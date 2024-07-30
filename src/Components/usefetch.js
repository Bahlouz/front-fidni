import { useEffect, useState } from 'react';

const useCategoriesAndSubCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoriesAndSubCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:1337/api/categories?populate=*');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.data) {
          throw new Error('Malformed response data');
        }

        // Extract categories and their subcategories from the response
        const categoriesData = data.data.map(category => ({
          id: category.id,
          name: category.attributes.name,
          subcategories: category.attributes.subcategories.data.map(subcategory => ({
            id: subcategory.id,
            name: subcategory.attributes.name
          }))
        }));

        setCategories(categoriesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories and subcategories:', error);
        setError(error.message || 'Error fetching data');
        setLoading(false);
      }
    };

    fetchCategoriesAndSubCategories();
  }, []);

  return { loading, error, categories };
};

export default useCategoriesAndSubCategories;
