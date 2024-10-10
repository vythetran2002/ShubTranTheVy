import axios, { AxiosResponse } from "axios";

interface SendDataResponse {
  message: string;
}

export const sendData = async (
  file: File,
  url: string
): Promise<SendDataResponse> => {
  try {
    if (!file.name.endsWith(".xlsx")) {
      throw new Error("Invalid file type. Please upload an xlsx file.");
    }

    const formData = new FormData();
    formData.append("file", file, file.name);

    const response: AxiosResponse<SendDataResponse> = await axios.post(
      url,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Failed to send file");
    } else {
      console.error("Error:", error);
      throw error;
    }
  }
};
