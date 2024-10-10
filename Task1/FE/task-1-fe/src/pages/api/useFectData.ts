import useSWR from "swr";
import axios from "axios";

interface FetchParams {
  page: number;
  limit: number;
  startTime?: string;
  endTime?: string;
}

interface ApiResponse<T> {
  data: T[];
  total?: number;
  page?: number;
  limit?: number;
  totalRevenue?: number;
}

const fetcher = async <T>(
  url: string,
  params: FetchParams
): Promise<ApiResponse<T>> => {
  const response = await axios.get(url, { params });
  return response.data;
};

export function useFetchData<T>(
  url: string,
  page: number,
  limit: number,
  startTime?: string | null,
  endTime?: string | null
) {
  const params: FetchParams = {
    page,
    limit,
    ...(startTime && { startTime }),
    ...(endTime && { endTime }),
  };

  const { data, error, isValidating, mutate } = useSWR<ApiResponse<T>, Error>(
    [url, params],
    () => fetcher<T>(url, params),
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );

  return {
    data: data?.data ?? [],
    total: data?.total ?? 0,
    totalRevenue: data?.totalRevenue,
    isLoading: !error && !data,
    isError: error,
    isValidating,
    mutate,
  };
}
