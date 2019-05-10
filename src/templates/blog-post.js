import React from 'react'
import styled from 'styled-components'
import rehypeReact from 'rehype-react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { RunkitProvider } from '../components/blog/Runkit'

import Layout from '../components/layout.js'
import { formatUTC } from '../components/utils'
import Grid, { Col, Row } from '../components/layout/Grid'
import Ul, { Li } from '../components/layout/Ul'
import { P, Span, H2, H3, H4, H5, Hr } from '../components/text'
import Header from '../components/layout/Header'
import { UpcomingTrainingSection } from '../components/training'
import { Breadcrumb, Link } from '../components/navigation'
import { WHITE } from '../config/styles'
import { Image } from '../components/elements'
import ContactForm from '../components/form/Contact'
import { Card, Video } from '../components/elements'
import { blogAuthors } from '../config/data'
import { Code, Blockquote, Codesandbox } from '../components/blog/Markdown'
import Tweet from '../components/blog/Tweet'
import ShareButtons from '../components/blog/ShareButtons'
import { MarketingCard } from '../components/curriculum'
import { FONT_FAMILY } from '../config/styles'

export const formatPostTitle = title => title.replace(/(<([^>]+)>)/gi, ' ')

const Table = styled.table`
  ${FONT_FAMILY};
`

const pre = styled.pre`
  overflow: hidden;
  > div {
    overflow: hidden;
  }
`
const img = styled(Image)`
  margin-top: 10px !important;
  margin-bottom: 10px !important;
`
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    a: Link,
    table: Table,
    p: P,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    ul: Ul,
    li: Li,
    pre,
    img,
    code: Code,
    span: Span,
    tweet: Tweet,
    blockquote: Blockquote,
    codesandbox: Codesandbox,
    video: Video,
    marketingcard: MarketingCard,
  },
}).Compiler

const StyledAuthor = styled.div`
  display: flex;
  color: ${WHITE};
  img {
    margin-right: 18px;
    width: 90px;
    height: 90px;
  }
  a {
    display: block;
  }
`

const PostMeta = ({ author = 'richard', date = '', timeToRead }) => (
  <StyledAuthor>
    <Image src={blogAuthors[author].imgSrc} circle />
    <P>
      <Link to={`/about-us#${blogAuthors[author].path}`}>
        By {blogAuthors[author].fullname}
      </Link>
      <Span>
        {formatUTC(date)} <br />
        Reading time: {timeToRead} mins
      </Span>
    </P>
  </StyledAuthor>
)

const GridContent = styled(Grid)`
  padding-top: 72px;
`

const BlogPost = ({ data }) => {
  const { htmlAst, timeToRead, frontmatter } = data.markdownRemark
  const { title, date, subtitle, author, imageUrl } = frontmatter
  const authorTwitter = frontmatter.authorTwitter || 'reactjsacademy'
  const { slug } = data.markdownRemark.fields
  const allPosts = data.allMarkdownRemark.edges
  const relatedPosts = allPosts.filter(post => post.node.fields.slug !== slug)
  return (
    <Layout>
      {({ trainings }) => (
        <RunkitProvider>
          <Helmet>
            <meta property="og:title" content={title} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:description" content={subtitle} />
            <meta property="og:type" content="article" />
          </Helmet>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: `/blog`, label: `Blog` },
              { to: slug, label: title },
            ]}
          />
          <Header
            titleLines={title.split('<br />')}
            fullHeight={false}
            paddingBottom={80}
            bgImg={imageUrl}
          >
            <PostMeta date={date} author={author} timeToRead={timeToRead} />
          </Header>
          <GridContent>
            <Row>
              <Col md={6}>
                {subtitle ? <H2>{subtitle}</H2> : null}
                {renderAst(htmlAst)}
              </Col>
              <Col md={4} mdOffset={1}>
                <Card small bg="dark" top={20}>
                  <ContactForm simplified />
                </Card>
                {relatedPosts.length ? (
                  <Card border="shadow" small top={20}>
                    <H4>Related articles</H4>
                    {relatedPosts.map((post, index) => (
                      <React.Fragment key={index}>
                        <Link to={post.node.fields.slug}>
                          {formatPostTitle(post.node.frontmatter.title)}
                        </Link>
                        <P>{formatUTC(post.node.frontmatter.date)}</P>
                      </React.Fragment>
                    ))}
                  </Card>
                ) : null}
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <P>Share this on: </P>
                <ShareButtons slug={slug} />
                <Hr />
                <P>
                  This website is built using Gatsbyjs. Curious about how this
                  blog is implemented? It's open source so you can{' '}
                  <Link to="https://github.com/leanjscom/reactjsacademy/blob/master/src/templates/blog-post.js">
                    check the source code
                  </Link>
                </P>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Hr />
                <P>
                  Comments? Shoot me a{' '}
                  <Link to={`http://twitter.com/${authorTwitter}`}>
                    tweet {`@${authorTwitter}`}
                  </Link>{' '}
                  !
                </P>
              </Col>
            </Row>
          </GridContent>
          <UpcomingTrainingSection trainings={trainings} />
        </RunkitProvider>
      )}
    </Layout>
  )
}

export const query = graphql`
  query blogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        subtitle
        author
        imageUrl
        authorTwitter
      }
      fields {
        slug
      }
      htmlAst
      timeToRead
    }
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/blog/" } } }
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogPost
