import PQueue from 'p-queue'

describe('PQueue', () => {
  it('should pass', () => {
    expect.assertions(1)
    const pQueue: PQueue = new PQueue()

    expect(pQueue).toBeDefined()
  })
})
