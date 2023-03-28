import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
// Component for displaying the status of an API response
const StatusColumn = ({ response }) => (
  <div className="responses-col_status">
    {response.status} - {response.statusText}
  </div>
);

// Component that renders the SwaggerUI component with custom options
const ApiDoc = () => {
  return (
    <SwaggerUI
      url='http://localhost:3000/swagger.yaml' // URL of the OpenAPI spec file
      defaultModelExpandDepth={1} // Control how deep the Schema model should be shown by default
      displayOperationId={false} // Hide the operation ID from the operations list
      docExpansion="list" // Set the default expansion level for the operations and tags
      supportedSubmitMethods={['get', 'post', 'put', 'delete']} // Specify which HTTP methods are supported
      components={{
        // Override the default StatusColumn component with our custom implementation
        StatusColumn: StatusColumn
      }}
    />
  );
};

export default ApiDoc