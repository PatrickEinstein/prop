export const GetCaller = async ({ route, query, token }) => {
  try {
    const encodedParams = Object.entries(query)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");

    const queryParams = encodedParams ? `?${encodedParams}` : "";
    const url = `https://retropay.up.railway.app/api/v1/auth/${route}${queryParams}`;

    const response = await fetch(url, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const GetCallerAdmin = async ({ route, query, token }) => {
  try {
    const encodedParams = Object.entries(query)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");

    const queryParams = encodedParams ? `?${encodedParams}` : "";
    const url = `https://retropay.up.railway.app/api/v1/admin/${route}${queryParams}`;

    const response = await fetch(url, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};
