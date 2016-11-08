import css from 'next/css'
import Link from 'next/link'
import React from 'react'
// import { Button, Badge } from 'rebass'

import {
    Arrow,
    Avatar,
    Badge,
    Banner,
    Block,
    Blockquote,
    Breadcrumbs,
    Button,
    ButtonCircle,
    ButtonOutline,
    Card,
    CardImage,
    Checkbox,
    Close,
    Container,
    Divider,
    Donut,
    DotIndicator,
    Dropdown,
    DropdownMenu,
    Embed,
    Fixed,
    Footer,
    Heading,
    InlineForm,
    Input,
    Label,
    LinkBlock,
    Media,
    Menu,
    Message,
    NavItem,
    Overlay,
    PageHeader,
    Panel,
    PanelFooter,
    PanelHeader,
    Pre,
    Progress,
    Radio,
    Rating,
    Section,
    SectionHeader,
    Select,
    SequenceMap,
    Slider,
    Space,
    Stat,
    Switch,
    Table,
    Text,
    Textarea,
    Toolbar,
    Tooltip,
    Base
} from 'rebass'


export default () => (
    <div>
        <h1>Next.js with Rebass</h1>
        <Button>Button</Button>
        <Badge>Badge</Badge>
        <Button>
            Arrow
            <Arrow />
        </Button>
        <Avatar src='http://lorempixel.com/64/64/cats' />
        <Banner backgroundImage='https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg'>
            <Heading size={0} children='Rebass' />
        </Banner>
        <Block
            px={2}
            borderLeft
            color='blue'>
            <Media img='http://placehold.it/128/08e/fff'>
                <Heading size={0}>Block</Heading>
                <Text>Generic box for containing things</Text>
            </Media>
        </Block>
        <Blockquote
            href='http://webtypography.net/3.1.1'
            source='Robert Bringhurst'>
            In the sixteenth century, a series of common sizes developed among European typographers, and the series survived with little change and few additions for 400 years. […] Use the old familiar scale, or use new scales of your own devising, but limit yourself, at first, to a modest set of distinct and related intervals.
        </Blockquote>

    </div>
)
