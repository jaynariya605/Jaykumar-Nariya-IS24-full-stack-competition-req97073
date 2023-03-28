import { useState, useEffect } from 'react';
import Error from './Error/Error'


/**
 * A higher-order component that performs a health check on the API endpoint and renders
 * an error component if the API is unhealthy. The component props are passed through to the
 * wrapped component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ComponentType} props.component - The component to render if the API is healthy.
 * @returns {React.ReactNode} The wrapped component or the error component.
 */
const HealthCheck = ({ component: Component, ...rest }) => {
  // Define state to track whether the API is healthy or not
  const [isHealthy, setIsHealthy] = useState(true);

  // Use useEffect to perform the API health check when the component mounts
  useEffect(() => {
    const checkHealth = async () => {
      try {
        // Make a GET request to the /health endpoint using fetch
        await fetch('http://localhost:3000/health')
          .then((data) => setIsHealthy(data.status === 200));
      } catch (error) {
        // If an error occurs during the request, set isHealthy to false
        setIsHealthy(false);
      }
    };
    checkHealth();
  }, []);

  // Render either the wrapped component or the error component based on the API health status
  if (!isHealthy) {
    return <Error />;
  }
  return <Component />;
};

export default HealthCheck;
