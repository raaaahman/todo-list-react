export function createFetchMock(stubData = []) {
    return jest.spyOn(window, 'fetch').mockReturnValue(
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve(stubData)
        })
    )
}