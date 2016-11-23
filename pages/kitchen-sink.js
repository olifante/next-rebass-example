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
        <div>
            <h1>Next.js with Rebass</h1>
        </div>
        <div>
            <h2>Button</h2>
            <Button>Button</Button>
        </div>
        <div>
            <h2>Badge</h2>
            <Badge>Badge</Badge>
        </div>
        <div>
            <h2>Arrow</h2>
            <Button>
                Arrow
                <Arrow />
            </Button>
        </div>
        <div>
            <h2>Avatar</h2>
            <Avatar src='http://lorempixel.com/64/64/cats' />
        </div>
        <div>
            <h2>Banner</h2>
            <Banner backgroundImage='https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg'>
                <Heading size={0} children='Rebass' />
            </Banner>
        </div>
        <div>
            <h2>Block</h2>
            <Block
                px={2}
                borderLeft
                color='blue'>
                <Media img='http://placehold.it/128/08e/fff'>
                    <Heading size={0}>Block</Heading>
                    <Text>Generic box for containing things</Text>
                </Media>
            </Block>
        </div>
        <div>
            <h2>Blockquote</h2>
            <Blockquote
                href='http://webtypography.net/3.1.1'
                source='Robert Bringhurst'>
                In the sixteenth century, a series of common sizes developed among European typographers, and the series survived with little change and few additions for 400 years. […] Use the old familiar scale, or use new scales of your own devising, but limit yourself, at first, to a modest set of distinct and related intervals.
            </Blockquote>
        </div>
        <div>
            <h2>Button</h2>
            <div>
                <Button children='Button' />
            </div>
        </div>
        <div>
            <h2>Button Outline</h2>
            <ButtonOutline
                rounded='left'
                children='Button' />
            <ButtonOutline
                rounded={false}
                style={{ marginLeft: -1 }}
                children='Group' />
            <Button
                rounded='right'
                style={{ marginLeft: -1 }}
                children='Button' />
        </div>
        <div>
            <h2>Card</h2>
            <Card width={256}>
                <CardImage src='http://placehold.it/320/08e/fff' />
                <Heading size={3} children='Card' />
                <Text>Cats like cards too</Text>
            </Card>
        </div>
        <div>
            <h2>CardImage</h2>
            <div style={{ maxWidth: 192 }}>
                <CardImage src='http://placehold.it/320/08e/fff' />
            </div>
        </div>
        <div>
            <h2>Checkbox</h2>
            <Checkbox
                name='checkbox_1'
                label='Checkbox' />
            <Checkbox
                checked
                readOnly
                theme='success'
                name='checkbox_1'
                label='Checkbox' />
        </div>
        <div>
            <h2>Close</h2>
            <Close />
        </div>
        <div>
            <h2>Container</h2>
            <Container>
                Container
    </Container>
        </div>
        <div>
            <h2>Divider</h2>
            <Divider />
            <Divider
                ml={0}
                width={128} />
        </div>
        <div>
            <h2>DotIndicator</h2>
            <DotIndicator
                length={3}
                active={0} />
        </div>
        <div>
            <h2>Dropdown</h2>
            <Dropdown>
                <Button>
                    Dropdown <Arrow />
                </Button>
                <DropdownMenu open={false}>
                    <NavItem children='Hello' />
                    <NavItem children='Hi' />
                </DropdownMenu>
            </Dropdown>
        </div>
        <div>
            <h2>Embed</h2>
            <Embed ratio={9 / 16}>
                <iframe
                    src='https://www.youtube.com/embed/KO_3Qgib6RQ'
                    allowFullScreen />
            </Embed>
        </div>
        <div>
            <h2>Footer</h2>
            <Footer>
                Footer™ ©2016 Jxnblk
    </Footer>
        </div>
        <div>
            <h2>Heading</h2>
            <Heading children='Heading' />
        </div>
        <div>
            <h2>Heading Link</h2>
            <Heading href='#HeadingLink' children='HeadingLink' />
        </div>
        <div>
            <h2>Inline Form</h2>
            <InlineForm
                name='inline_form'
                label='InlineForm' />
        </div>
        <div>
            <h2>Input</h2>
            <Input
                name='input_example'
                placeholder='Placeholder'
                label='Input' />
        </div>
        <div>
            <h2>Label</h2>
            <Label>
                Label for form elements
    </Label>
        </div>
        <div>
            <h2>Link Block</h2>
            <LinkBlock href='#LinkBlock'>
                <Media align='center' img='http://placehold.it/96/08e/fff'>
                    <Heading level={3} children='LinkBlock' />
                </Media>
            </LinkBlock>
        </div>
        <div>
            <h2>Media</h2>
            <Media img='http://placehold.it/128/08e/fff' align='center'>
                <Heading level={3} children='Media Object' />
                <Text children='With alignment options' />
            </Media>
        </div>
        <div>
            <h2>Menu</h2>
            <Menu>
                <NavItem children='Menu' />
                <NavItem children='NavItem' />
                <NavItem children='NavItem' />
            </Menu>
        </div>
        <div>
            <h2>Message</h2>
            <Message theme='success'>
                Hello Message!
      <Space auto />
                <Close />
            </Message>
        </div>
        <div>
            <h2>Page Header</h2>
            <PageHeader
                heading='Page Header'
                description='Description about the page' />
        </div>
        <div>
            <h2>Panel</h2>
            <Panel theme='info'>
                <PanelHeader children='Panel' />
                <Text>
                    Panels are great for visually separating UI, content, or data from the rest of the page.
                </Text>
                <PanelFooter children='The footer is a good place for less important information' />
            </Panel>
        </div>
        <div>
            <h2>Pre</h2>
            <Pre children={`const pre = { preformatted: 'text' }`} />
        </div>
        <div>
            <h2>Progress</h2>
            <Progress value={0.25} />
        </div>
        <div>
            <h2>Radio</h2>
            <Radio
                checked
                readOnly
                name='radio_1'
                label='Radio' />
            <Radio
                name='radio_1'
                label='Radio' />
        </div>
        <div>
            <h2>Rating</h2>
            <Rating value={3.5} />
        </div>
        <div>
            <h2>Section</h2>
            <Section>
                Section
            </Section>
        </div>
        <div>
            <h2>Section Header</h2>
            <Section>
                <SectionHeader
                    heading='Section Header'
                    description='With linked header' />
                Section
            </Section>
        </div>
        <div>
            <h2>Select</h2>
            <Select
                name='select_example'
                label='Select'
                options={[
                    { value: 2, children: 'Two' },
                    { value: 4, children: 'Four' },
                    { value: 8, children: 'Eight' },
                    { value: 16, children: 'Sixteen' },
                    { value: 32, children: 'Thirty-Two' },
                    { value: 64, children: 'Sixty-Four' }
                ]} />
        </div>
        <div>
            <h2>Sequence Map</h2>
            <SequenceMap
                steps={[
                    { href: '#!', children: 'Sign In' },
                    { href: '#!', children: 'Shipping Address' },
                    { href: '#!', children: 'Payment Method' },
                    { href: '#!', children: 'Place Order' }
                ]}
                active={1} />
        </div>
        <div>
            <h2>Slider</h2>
            <Slider
                name='slider_1'
                label='Slider'
                defaultValue={3 / 8 * 100} />
            <Slider
                fill
                color='blue'
                name='slider_2'
                label='Slider with color and fill'
                readOnly
                value={5 / 8 * 100} />
        </div>
        <div>
            <h2>Button With Space</h2>
            <Button children='Button' />
            <Space />
            <Button children='With' />
            <Space x={4} />
            <Button children='Space' />
        </div>
        <div>
            <h2>Switch</h2>
            <Switch />
        </div>
        <div>
            <h2>Table</h2>
            <Table
                headings={['Name', 'Meat', 'Vegetable', 'Carb']}
                data={[
                    ['Hamburger', 'Beef', 'Onion', 'Bun'],
                    ['Pizza', 'Pork', 'Tomato', 'Crust'],
                    ['Corndog', 'Pork', 'Corn', 'Cornbread'],
                    ['Hot Dog', 'Pork', 'Peppers', 'Bun'],
                ]} />
        </div>
        <div>
            <h2>Text</h2>
            <Text>Hello</Text>
        </div>
        <div>
            <h2>Textarea</h2>
            <Textarea
                name='textarea'
                label='Textarea'
                defaultValue='Hello'
                />
        </div>
        <div>
            <h2>Toolbar</h2>
            <Toolbar>
                <NavItem children='Toolbar' />
                <NavItem children='NavItem' />
                <Space auto />
                <NavItem children='NavItem' />
            </Toolbar>
        </div>
        <div>
            <h2>Tooltip</h2>
            <Tooltip title='Hello!'>
                <Heading level={3}>Tooltip</Heading>
            </Tooltip>
        </div>
        <div>
            <h2>Base</h2>
            <Base
                p={2}
                mb={3}
                color='blue'
                backgroundColor='black'
                rounded
                children='Base' />
        </div>
    </div>
)
