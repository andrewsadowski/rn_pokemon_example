import * as React from "react";
import { View, ActivityIndicator } from "react-native";

const WithLoading = WrappedComponent => {
  return class extends React.Component {
    render() {
      if (this.props.loading) return <ActivityIndicator size="small" color="white" />
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default WithLoading;