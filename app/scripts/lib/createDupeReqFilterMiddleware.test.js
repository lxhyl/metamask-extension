import createDupeReqFilterMiddleware from './createDupeReqFilterMiddleware';

describe('createDupeReqFilterMiddleware', () => {
  it('call function next if request is seen first time', () => {
    const filterFn = createDupeReqFilterMiddleware();
    const request = { id: 1 };
    const nextMock = jest.fn();
    const endMock = jest.fn();

    filterFn(request, undefined, nextMock, endMock);

    expect(nextMock).toBeCalledTimes(1);
    expect(endMock).not.toBeCalled();
  });

  it('call function end if request is seen second time', () => {
    const filterFn = createDupeReqFilterMiddleware();
    const request = { id: 1 };
    const nextMock = jest.fn();
    const endMock = jest.fn();

    filterFn(request, undefined, nextMock, endMock);
    expect(nextMock).toBeCalledTimes(1);
    expect(endMock).not.toBeCalled();

    filterFn(request, undefined, nextMock, endMock);
    expect(nextMock).toBeCalledTimes(1);
    expect(endMock).toBeCalledTimes(1);
  });
});
