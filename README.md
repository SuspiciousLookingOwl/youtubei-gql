# Youtube GraphQL API

**Note: this app is made for educational purposes**

A Youtube GraphQL API made with [NestJS](https://docs.nestjs.com/graphql) and [Youtubei](https://github.com/SuspiciousLookingOwl/youtubei)

#### [Schema](./src/schema.gql)

#### [Try It Out](https://youtubei-gql.glitch.me/graphql)

## Example

<table border="0">

<tr>
<td>Query</td>
<td>Result</td>
</tr>

<tr>
<td>

```gql
query {
  search(keyword: "never gonna give you up", limit: 3) {
    items {
      ... on BaseChannel {
        channelId: id
        name
      }
      ... on VideoCompact {
        videoId: id
        title
        channel {
          name
        }
      }
      ... on PlaylistCompact {
        playlistId: id
        title
        channel {
          name
        }
      }
    }
  }
  video(id: "dQw4w9WgXcQ") {
    id
    title
    related(limit: 1) {
      items {
        id
        title
        channel {
          name
          videos(limit: 5) {
            items {
              id
              title
            }
          }
        }
      }
    }
  }
}
```

</td>
<td>

```json
{
  "data": {
    "search": {
      "items": [
        {
          "videoId": "dQw4w9WgXcQ",
          "title": "Rick Astley - Never Gonna Give You Up (Official Music Video)",
          "channel": {
            "name": "Rick Astley"
          }
        },
        {
          "videoId": "34Ig3X59_qA",
          "title": "Never Gonna Give You Up - Rick Astley (Lyrics) 🎵",
          "channel": {
            "name": "DopeLyrics"
          }
        },
        {
          "videoId": "LLFhKaqnWwk",
          "title": "Rick Astley - Never Gonna Give You Up (Official Animated Video)",
          "channel": {
            "name": "Rick Astley"
          }
        }
      ]
    },
    "video": {
      "id": "dQw4w9WgXcQ",
      "title": "Rick Astley - Never Gonna Give You Up (Official Music Video)",
      "related": {
        "items": [
          {
            "id": "yPYZpwSpKmA",
            "title": "Rick Astley - Together Forever (Official Video) [Remastered in 4K]",
            "channel": {
              "name": "Rick Astley",
              "videos": {
                "items": [
                  {
                    "id": "LLFhKaqnWwk",
                    "title": "Rick Astley - Never Gonna Give You Up (Official Animated Video)"
                  },
                  {
                    "id": "rZlQ28OeGMI",
                    "title": "Rick Astley – My Arms Keep Missing You (Official Audio)"
                  },
                  {
                    "id": "JIOPB36ALMM",
                    "title": "Rick Astley - abcdefu (GAYLE Cover)"
                  }
                ]
              }
            }
          }
        ]
      }
    }
  }
}
```

</td>
</tr>
</table>

## Development

Install `pnpm` if you haven't

````

npm i -g pnpm

```

Install dependency

```

pnpm i

```

Start the dev server:

```

pnpm start:dev

```

```
````
