/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    categories: Category;
    posts: Post;
    tags: Tag;
    users: User;
    media: Media;
    'rookery-editions': RookeryEdition;
    pages: Page;
    locations: Location;
    guides: Guide;
  };
  globals: {
    mainMenu: MainMenu;
    footer: Footer;
  };
}
export interface Category {
  id: string;
  name?: string;
}
export interface Post {
  id: string;
  title?: string;
  author?: string | User;
  publishedDate?: string;
  category?: string | Category;
  tags?: string[] | Tag[];
  content?: {
    [k: string]: unknown;
  }[];
  status?: 'draft' | 'published';
  updatedAt: string;
  createdAt: string;
}
export interface User {
  id: string;
  name?: string;
  updatedAt: string;
  createdAt: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Tag {
  id: string;
  name?: string;
}
export interface Media {
  id: string;
  prefix?: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}
export interface RookeryEdition {
  id: string;
  name: string;
  description?: string;
  link: string;
  thumbnail: string | Media;
}
export interface Page {
  id: string;
  title: string;
  hero: {
    type:
      | 'basic'
      | 'content'
      | 'contentMedia'
      | 'contentSidebar'
      | 'quickNav'
      | 'fullscreenBackground'
      | 'fullscreenSlider';
    basic?: {
      richText?: {
        [k: string]: unknown;
      }[];
      links: {
        link: {
          appearance?: 'text' | 'primaryButton' | 'secondaryButton';
          type?: 'reference' | 'custom';
          label: string;
          reference:
            | {
                value: string | Page;
                relationTo: 'pages';
              }
            | {
                value: string | Post;
                relationTo: 'posts';
              };
          url: string;
          newTab?: boolean;
        };
        id?: string;
      }[];
    };
    content?: {
      richText?: {
        [k: string]: unknown;
      }[];
      links: {
        link: {
          appearance?: 'text' | 'primaryButton' | 'secondaryButton';
          type?: 'reference' | 'custom';
          label: string;
          reference:
            | {
                value: string | Page;
                relationTo: 'pages';
              }
            | {
                value: string | Post;
                relationTo: 'posts';
              };
          url: string;
          newTab?: boolean;
        };
        id?: string;
      }[];
    };
    contentMedia?: {
      richText?: {
        [k: string]: unknown;
      }[];
      links: {
        link: {
          appearance?: 'text' | 'primaryButton' | 'secondaryButton';
          type?: 'reference' | 'custom';
          label: string;
          reference:
            | {
                value: string | Page;
                relationTo: 'pages';
              }
            | {
                value: string | Post;
                relationTo: 'posts';
              };
          url: string;
          newTab?: boolean;
        };
        id?: string;
      }[];
      media?: string | Media;
      embeddedVideo: {
        embed?: boolean;
        poster?: string | Media;
        platform?: 'youtube' | 'vimeo';
        videoID: string;
        aspectRatio?: '56.25' | '75';
      };
    };
    contentSidebar?: {
      mainContent?: {
        [k: string]: unknown;
      }[];
      links: {
        link: {
          appearance?: 'text' | 'primaryButton' | 'secondaryButton';
          type?: 'reference' | 'custom';
          label: string;
          reference:
            | {
                value: string | Page;
                relationTo: 'pages';
              }
            | {
                value: string | Post;
                relationTo: 'posts';
              };
          url: string;
          newTab?: boolean;
        };
        id?: string;
      }[];
      sidebarContent?: {
        [k: string]: unknown;
      }[];
    };
    fullscreenBackground?: {
      backgroundMedia: string | Media;
      richText?: {
        [k: string]: unknown;
      }[];
      links: {
        link: {
          appearance?: 'text' | 'primaryButton' | 'secondaryButton';
          type?: 'reference' | 'custom';
          label: string;
          reference:
            | {
                value: string | Page;
                relationTo: 'pages';
              }
            | {
                value: string | Post;
                relationTo: 'posts';
              };
          url: string;
          newTab?: boolean;
        };
        id?: string;
      }[];
    };
    quickNav?: {
      backgroundMedia: string | Media;
      richText?: {
        [k: string]: unknown;
      }[];
      links: {
        link: {
          appearance?: 'text' | 'primaryButton' | 'secondaryButton';
          type?: 'reference' | 'custom';
          label: string;
          reference:
            | {
                value: string | Page;
                relationTo: 'pages';
              }
            | {
                value: string | Post;
                relationTo: 'posts';
              };
          url: string;
          newTab?: boolean;
        };
        id?: string;
      }[];
      columns: {
        heading: string;
        description: string;
        link: {
          type?: 'reference' | 'custom';
          reference:
            | {
                value: string | Page;
                relationTo: 'pages';
              }
            | {
                value: string | Post;
                relationTo: 'posts';
              };
          url: string;
          newTab?: boolean;
        };
        id?: string;
      }[];
    };
    fullscreenSlider?: {
      useStaticContent?: boolean;
      richText?: {
        [k: string]: unknown;
      }[];
      links?: {
        link: {
          appearance?: 'text' | 'primaryButton' | 'secondaryButton';
          type?: 'reference' | 'custom';
          label: string;
          reference:
            | {
                value: string | Page;
                relationTo: 'pages';
              }
            | {
                value: string | Post;
                relationTo: 'posts';
              };
          url: string;
          newTab?: boolean;
        };
        id?: string;
      }[];
      slides: {
        backgroundMedia: string | Media;
        richText?: {
          [k: string]: unknown;
        }[];
        links?: {
          link: {
            appearance?: 'text' | 'primaryButton' | 'secondaryButton';
            type?: 'reference' | 'custom';
            label: string;
            reference:
              | {
                  value: string | Page;
                  relationTo: 'pages';
                }
              | {
                  value: string | Post;
                  relationTo: 'posts';
                };
            url: string;
            newTab?: boolean;
          };
          id?: string;
        }[];
        id?: string;
      }[];
    };
  };
  layout?: (
    | {
        appearance?: 'default' | 'condensed';
        sections: {
          label: string;
          openOnInit?: boolean;
          columns: {
            width: 'oneThird' | 'half' | 'twoThirds' | 'full';
            alignment: 'left' | 'center' | 'right';
            richText?: {
              [k: string]: unknown;
            }[];
            links: {
              link: {
                type?: 'reference' | 'custom';
                label: string;
                reference:
                  | {
                      value: string | Page;
                      relationTo: 'pages';
                    }
                  | {
                      value: string | Post;
                      relationTo: 'posts';
                    };
                url: string;
                newTab?: boolean;
              };
              id?: string;
            }[];
            id?: string;
          }[];
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'accordion';
      }
    | {
        columns: {
          width: 'oneThird' | 'half' | 'twoThirds' | 'full';
          alignment: 'left' | 'center' | 'right';
          richText?: {
            [k: string]: unknown;
          }[];
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        media: string | Media;
        useVimeo?: boolean;
        vimeoID: string;
        aspectRatio?: '56.25' | '75';
        size?: 'normal' | 'wide' | 'fullscreen';
        caption?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'media';
      }
    | {
        alignment: 'contentOnLeft' | 'contentOnRight';
        richText?: {
          [k: string]: unknown;
        }[];
        media: string | Media;
        embeddedVideo: {
          embed?: boolean;
          poster?: string | Media;
          platform?: 'youtube' | 'vimeo';
          videoID: string;
          aspectRatio?: '56.25' | '75';
        };
        links: {
          link: {
            appearance?: 'text' | 'primaryButton' | 'secondaryButton';
            type?: 'reference' | 'custom';
            label: string;
            reference:
              | {
                  value: string | Page;
                  relationTo: 'pages';
                }
              | {
                  value: string | Post;
                  relationTo: 'posts';
                };
            url: string;
            newTab?: boolean;
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'mediaContent';
      }
    | {
        introContent?: {
          [k: string]: unknown;
        }[];
        slides: {
          media: string | Media;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'mediaSlider';
      }
    | {
        label: string;
        link: {
          type?: 'reference' | 'custom';
          label: string;
          reference:
            | {
                value: string | Page;
                relationTo: 'pages';
              }
            | {
                value: string | Post;
                relationTo: 'posts';
              };
          url: string;
          newTab?: boolean;
        };
        id?: string;
        blockName?: string;
        blockType: 'banner';
      }
    | {
        label: string;
        useAnimation?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'animated-heading';
      }
    | {
        heading: string;
        description: string;
        link: {
          type?: 'reference' | 'custom';
          label: string;
          reference:
            | {
                value: string | Page;
                relationTo: 'pages';
              }
            | {
                value: string | Post;
                relationTo: 'posts';
              };
          url: string;
          newTab?: boolean;
        };
        media: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'latest-edition';
      }
  )[];
  fullTitle?: string;
  breadcrumbs?: {
    doc?: string | Page;
    url?: string;
    label?: string;
    id?: string;
  }[];
  slug?: string;
  parent?: string | Page;
  author?: string | User;
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Location {
  id: string;
  locationName: string;
  projectDetails: {
    information: {
      region:
        | 'dorne'
        | 'riverlands'
        | 'theWall'
        | 'north'
        | 'vale'
        | 'ironIslands'
        | 'westerlands'
        | 'crownlands'
        | 'stormlands'
        | 'reach'
        | 'beyondTheWall';
      status: 'completed' | 'inProgress' | 'notStarted' | 'abandoned' | 'redoInProgress';
      type:
        | 'castle'
        | 'town'
        | 'village'
        | 'city'
        | 'holdfast'
        | 'keep'
        | 'landmark'
        | 'ruin'
        | 'tower'
        | 'clan'
        | 'crannog'
        | 'miscellaneous';
      warp?: string;
      house?: string;
      application?: string;
      projectLeads?: string;
      dateStarted?: string;
      dateCompleted?: string;
      difficultyLevel?: '1' | '2' | '3' | '4' | '5' | '6';
      redoAvailable?: boolean;
      serverProject?: boolean;
    };
    dynmapLocation?: {
      dynmapZoom?: string;
      dynmapXcoord?: string;
      dynmapYcoord?: string;
    };
  };
  bannerImage?: string | Media;
  locationImages?: {
    media?: string | Media;
    id?: string;
  }[];
  layout?: (
    | {
        columns: {
          width: 'oneThird' | 'half' | 'twoThirds' | 'full';
          alignment: 'left' | 'center' | 'right';
          richText?: {
            [k: string]: unknown;
          }[];
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        media: string | Media;
        useVimeo?: boolean;
        vimeoID: string;
        aspectRatio?: '56.25' | '75';
        size?: 'normal' | 'wide' | 'fullscreen';
        caption?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'media';
      }
    | {
        alignment: 'contentOnLeft' | 'contentOnRight';
        richText?: {
          [k: string]: unknown;
        }[];
        media: string | Media;
        embeddedVideo: {
          embed?: boolean;
          poster?: string | Media;
          platform?: 'youtube' | 'vimeo';
          videoID: string;
          aspectRatio?: '56.25' | '75';
        };
        links: {
          link: {
            appearance?: 'text' | 'primaryButton' | 'secondaryButton';
            type?: 'reference' | 'custom';
            label: string;
            reference:
              | {
                  value: string | Page;
                  relationTo: 'pages';
                }
              | {
                  value: string | Post;
                  relationTo: 'posts';
                };
            url: string;
            newTab?: boolean;
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'mediaContent';
      }
    | {
        introContent?: {
          [k: string]: unknown;
        }[];
        slides: {
          media: string | Media;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'mediaSlider';
      }
  )[];
  fullTitle?: string;
  breadcrumbs?: {
    doc?: string | Location;
    url?: string;
    label?: string;
    id?: string;
  }[];
  slug?: string;
  author?: string | User;
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Guide {
  id: string;
  guideName: string;
  guideDetails: {
    information: {
      guideCategory: 'howTo' | 'resources' | 'gettingStarted' | 'rulesAndGuidelines';
    };
  };
  layout?: (
    | {
        columns: {
          width: 'oneThird' | 'half' | 'twoThirds' | 'full';
          alignment: 'left' | 'center' | 'right';
          richText?: {
            [k: string]: unknown;
          }[];
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        media: string | Media;
        useVimeo?: boolean;
        vimeoID: string;
        aspectRatio?: '56.25' | '75';
        size?: 'normal' | 'wide' | 'fullscreen';
        caption?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'media';
      }
    | {
        alignment: 'contentOnLeft' | 'contentOnRight';
        richText?: {
          [k: string]: unknown;
        }[];
        media: string | Media;
        embeddedVideo: {
          embed?: boolean;
          poster?: string | Media;
          platform?: 'youtube' | 'vimeo';
          videoID: string;
          aspectRatio?: '56.25' | '75';
        };
        links: {
          link: {
            appearance?: 'text' | 'primaryButton' | 'secondaryButton';
            type?: 'reference' | 'custom';
            label: string;
            reference:
              | {
                  value: string | Page;
                  relationTo: 'pages';
                }
              | {
                  value: string | Post;
                  relationTo: 'posts';
                };
            url: string;
            newTab?: boolean;
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'mediaContent';
      }
    | {
        introContent?: {
          [k: string]: unknown;
        }[];
        slides: {
          media: string | Media;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'mediaSlider';
      }
  )[];
  fullTitle?: string;
  breadcrumbs?: {
    doc?: string | Location;
    url?: string;
    label?: string;
    id?: string;
  }[];
  slug?: string;
  author?: string | User;
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface MainMenu {
  id: string;
  items: {
    type?: 'link' | 'subMenu';
    label: string;
    subMenu?: {
      blocks?: (
        | {
            title: string;
            id?: string;
            blockName?: string;
            blockType: 'menuTitle';
          }
        | {
            appearance?: 'primary' | 'secondary' | 'arrow';
            link: {
              type?: 'reference' | 'custom';
              label: string;
              reference:
                | {
                    value: string | Page;
                    relationTo: 'pages';
                  }
                | {
                    value: string | Post;
                    relationTo: 'posts';
                  };
              url: string;
              newTab?: boolean;
            };
            id?: string;
            blockName?: string;
            blockType: 'menuLink';
          }
        | {
            content: string;
            id?: string;
            blockName?: string;
            blockType: 'menuDescription';
          }
        | {
            menuFeatureMedia: string | Media;
            headline: string;
            link: {
              type?: 'reference' | 'custom';
              reference:
                | {
                    value: string | Page;
                    relationTo: 'pages';
                  }
                | {
                    value: string | Post;
                    relationTo: 'posts';
                  };
              url: string;
              newTab?: boolean;
            };
            id?: string;
            blockName?: string;
            blockType: 'menuFeature';
          }
      )[];
    };
    link?: {
      type?: 'reference' | 'custom';
      reference:
        | {
            value: string | Page;
            relationTo: 'pages';
          }
        | {
            value: string | Post;
            relationTo: 'posts';
          };
      url: string;
      newTab?: boolean;
    };
    id?: string;
  }[];
}
export interface Footer {
  id: string;
  items: {
    type?: 'link' | 'subMenu';
    label: string;
    subMenu?: {
      blocks?: (
        | {
            title: string;
            id?: string;
            blockName?: string;
            blockType: 'menuTitle';
          }
        | {
            appearance?: 'primary' | 'secondary' | 'arrow';
            link: {
              type?: 'reference' | 'custom';
              label: string;
              reference:
                | {
                    value: string | Page;
                    relationTo: 'pages';
                  }
                | {
                    value: string | Post;
                    relationTo: 'posts';
                  };
              url: string;
              newTab?: boolean;
            };
            id?: string;
            blockName?: string;
            blockType: 'menuLink';
          }
        | {
            content: string;
            id?: string;
            blockName?: string;
            blockType: 'menuDescription';
          }
        | {
            menuFeatureMedia: string | Media;
            headline: string;
            link: {
              type?: 'reference' | 'custom';
              reference:
                | {
                    value: string | Page;
                    relationTo: 'pages';
                  }
                | {
                    value: string | Post;
                    relationTo: 'posts';
                  };
              url: string;
              newTab?: boolean;
            };
            id?: string;
            blockName?: string;
            blockType: 'menuFeature';
          }
      )[];
    };
    link?: {
      type?: 'reference' | 'custom';
      reference:
        | {
            value: string | Page;
            relationTo: 'pages';
          }
        | {
            value: string | Post;
            relationTo: 'posts';
          };
      url: string;
      newTab?: boolean;
    };
    id?: string;
  }[];
}