import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  async getAccessToken() {
    return await AuthStorage.getItem(`${this.namespace}.token`);
  }

  async setAccessToken(accessToken) {
    await AuthStorage.setItem(`${this.namespace}.token`, accessToken);
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}.token`);
  }
}

export default AuthStorage;
