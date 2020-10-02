const gql = require('graphql-tag');

module.exports = gql`

fragment ContentCompanyPageFragment on Content {
  id
  type
  name
  teaser(input: { useFallback: false, maxLength: null })
  body

  siteContext {
    path
  }
  ... on ContentCompany {

    address1
    address2
    cityStateZip
    country

    phone
    tollfree
    fax
    website
    title
    mobile
    email
    publicEmail

    youtube {
      username
      channelId
      url
    }

    # kv data
    yearsInOperation
    numberOfEmployees
    salesChannels
    salesRegion

    # long text data
    productSummary
    servicesProvided
    serviceInformation
    trainingInformation
    warrantyInformation

    # circle image
    primaryImage {
      id
      src(input: { options: { auto: "format", fillColor: "fff", fit: "fill", h: 125, w: 125, pad: 5, mask: "ellipse" } })
      alt
    }

    publicContacts {
      edges {
        node {
          id
          name
          title
          publicEmail
          primaryImage {
            id
            src(input: { options: { auto: "format", h: 100, w: 100, mask: "ellipse", fit: "facearea", facepad: 3 } })
          }
        }
      }
    }

    youtubeVideos(input: { pagination: { limit: 3 } }) {
      edges {
        node {
          id
          url
          title
          published
          thumbnail(input: { size: high })
        }
      }
    }
  }
  ... on SocialLinkable {
    socialLinks {
      provider
      url
      label
    }
  }
  ... on Inquirable {
    enableRmi
  }
}

`;
