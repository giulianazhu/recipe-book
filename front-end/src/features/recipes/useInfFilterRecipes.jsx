import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { getFilterRecipesInf } from "../../services/apiRecipes";
import { pageSizeOptions } from "../../utils/constants";

export default function useInfFilterRecipes(
  filters = "all",
  page = 1,
  pageSize = pageSizeOptions[0]
) {
  const queryClient = useQueryClient();

  const {
    data,
    isPending,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["recipes", filters, pageSize],
    queryFn: ({ pageParam = 1 }) =>
      getFilterRecipesInf(filters, pageParam, pageSize),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.hasMore) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  queryClient.prefetchInfiniteQuery({
    queryKey: ["recipes", filters, pageSize],
    queryFn: ({ pageParam }) =>
      getFilterRecipesInf(filters, pageParam, pageSize),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.hasMore) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  return {
    data,
    isPending,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isError,
    error,
  };
}
