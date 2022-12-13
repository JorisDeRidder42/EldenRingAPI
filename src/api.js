export const useGetDirectories = (parentId) => {
    return useQuery(
        ['directories', parentId],
        () => getDirectories(parentId),
        {
            staleTime: Infinity, // The app doesn't support adding/deleting directories
            cacheTime: Infinity
        }
    )
}
export default useGetDirectories();