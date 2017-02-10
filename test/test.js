const assert = require('assert')
const chai = require('chai')

validateSearch = (businessName, postalCode) => {
  return Boolean(businessName && postalCode)
}

// See? You can use Mocha and Chai

describe('BusinessSearchService', () => {
  describe('#validateSearch()', () => {
    it('should not allow empty business name or empty zip code', () => {
      chai.expect(validateSearch('', '48226')).to.equal(false)
      chai.expect(validateSearch('Waymark', '')).to.equal(false)
      chai.expect(validateSearch('Waymark', '48226')).to.equal(true)
    })
  })
})