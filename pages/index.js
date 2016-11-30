// example adapted from https://github.com/jxnblk/rebass/docs/examples.js

import css from 'next/css'
import { insertGlobal } from 'next/css'
import React from 'react'
import Head from 'next/head'
import Icon from 'react-geomicons'
import { Flex, Box } from 'reflexbox'

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
  Close,
  Container,
  Divider,
  Donut,
  DotIndicator,
  Embed,
  Fixed,
  Footer,
  Heading,
  LinkBlock,
  Media,
  Message,
  NavItem,
  PageHeader,
  Panel,
  PanelFooter,
  PanelHeader,
  Pre,
  Rating,
  Section,
  SectionHeader,
  Space,
  Stat,
  Table,
  Text,
  Toolbar,
  Tooltip,
} from 'rebass'

insertGlobal(
  "html",
  { "WebkitTextSizeAdjust": "100%" }
)
insertGlobal(
  "body",
  {
    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
    color: "#111",
    backgroundColor: "#fff",
    lineHeight: "1.5",
    margin: "0"
  }
)
insertGlobal(
  ".Button:hover",
  { boxShadow: "inset 0 0 0 999px rgba(0, 0, 0, .25)" }
)

export default () => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>Rebass Presentational Components</title>
    </Head>
    <Fixed
      top left right zIndex={1} >
      <Toolbar>
        <NavItem children='Toolbar' />
        <Space auto />
        <NavItem children='Item 1' />
        <Space />
        <NavItem children='Item 2' />
      </Toolbar>
    </Fixed>
    <Banner
      backgroundImage='https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg' >
      <Heading size={0} children='Rebass' />
    </Banner>
    <Container m={2} >
      <Breadcrumbs
        links={[
          { href: '#!', children: 'Home' },
          { href: '#!', children: 'Item 1' },
          { href: '#!', children: 'Sub-item 1' }
        ]} />

      <PageHeader
        heading='Page Header'
        description='Description about the page' />

      <Flex wrap justify='space-between' m={2} >
        <Avatar src='http://lorempixel.com/64/64/cats/1' />
        <Avatar src='http://lorempixel.com/64/64/cats/2' />
        <Avatar src='http://lorempixel.com/64/64/cats/3' />
        <Avatar src='http://lorempixel.com/64/64/cats/4' />
        <Avatar src='http://lorempixel.com/64/64/cats/5' />
        <Avatar src='http://lorempixel.com/64/64/cats/6' />
      </Flex>

      <Text>
        Obacht! Dem Fatzke jauchzen die einfältig Schutzschwalbe. Dem hold Haderlump flanieren. Des dufte Bagage lobpreisen. Des ausgemergelt Fernweh frickeln. Dem pomadig Fracksausen. Der fatal Gamaschen auftakeln. Dem gebeutelt Blutwurst. Fräulein und Klabusterbeere abkupfern piesacken Absacker. Die Prahlhans ergötzen dem blümerant Übeltäter. Der altbacken Wildfang lustwandeln. Dem geflissentlich Schlachtschüssel. Das Kohlroulade picheln die famos Schlachtenbummler. Das gemach Flegel bauchpinseln. Heidewitzka!
      </Text>

      <Block
        px={2}
        m={2}
        borderLeft
        color='blue'
        >
        <Blockquote
          href='http://www.krautipsum.com/'
          source='Kraut Ipsum'>
          Gott zum Gruße! Schindluder und Scharmützel berappen halbstark Kleinod. Dem feist Hechtsuppe. Geschmeide und Schelm flanieren fatal Tohuwabohu. Das flügge Grüne Minna duellieren. Dem pompös Lümmeltüte. Thusnelda und Klimbim betören butterweich Kaiserwetter. Die hold Weinbrandbohne. Dem schnieke Groschengrab. Das garstig Trinkhalle grämen. Schnitzel und Haudegen bauchpinseln hochgestochen Flickschusterei. Der Schäferstündchen bohnern dem ausgemergelt Früchtchen. Dem Fleischwarenfachverkäuferin anschwärzen der gebeutelt Augenschmaus. Des gemach Tausendsassa schlampampen. Potzblitz!
        </Blockquote>
      </Block>

      <Text>
        Gott zum Gruße! Dem ausgemergelt Franzosenkrankheit lustwandeln. Die piesacken Weinbrandbohne. Die Firlefanz lobpreisen dem feist Schindluder. Dem Lümmeltüte picheln des pomadig Groschengrab. Die Sauerkraut bauchpinseln dem butterweich Kaffeekränzchen. Dem hochgestochen Schenkelbürste friemeln. Stelldichein und Muckefuck auftakeln altbacken Grüne Minna. Dem Flausen anschwärzen der bräsig Schnösel. Fernweh und Fatzke liebkosen fidel Drückeberger. Narr und Flegel bemuttern dufte Wildfang. Des schamlos Haubitze piesacken. Die Halunke jauchzen das gebeutelt Feuertaufe. Mein lieber Scholli!
      </Text>

      <Flex p={1} wrap>
        <Card p={1} m={1} >
          <CardImage src='http://lorempixel.com/200/200/cats/1/' />
          <Heading size={3} children='Card' />
          <Text>Cats like cards too</Text>
        </Card>

        <Card p={1} m={1} >
          <CardImage src='http://lorempixel.com/200/200/cats/2/' />
          <Heading size={3} children='Card' />
          <Text>Cats like cards too</Text>
        </Card>

        <Card p={1} m={1} >
          <CardImage src='http://lorempixel.com/200/200/cats/3/' />
          <Heading size={3} children='Card' />
          <Text>Cats like cards too</Text>
        </Card>
      </Flex>

      <Flex p={2} justify='space-between' >
        <Media p={2} img='http://lorempixel.com/150/150/animals/4/' align='center' />
        <Text>
          Gott zum Gruße! Der Stelldichein picheln die gemach Kaiserwetter. Das hold Wuchtbrumme foppen. Des Haubitze bohnern das hochnäsig Hanswurst. Schlachtenbummler und Lametta liebkosen adrett Lümmeltüte. Des famos Rädelsführer auftakeln. Grüne Minna und Blockwart bemuttern grobschlächtig Eisbein. Der frivol Schuhwichse. Der Augenweide stibitzen das altbacken Schlachtschüssel. Die Steckenpferd jauchzen die flügge Sättigungsbeilage. Die nichtsnutzig Kinkerlitzchen betören. Des stramm Presssack. Fernweh und Wendehals lobpreisen kess Fleischwarenfachverkäuferin. Gemächt und Damenbart schlampampen einfältig Ganove. Der Gedudel dengeln der emsig Personenvereinzelungsanlage. Heidewitzka!
        </Text>
      </Flex>

      <Flex p={2} justify='space-between' >
        <Text>
          Habe die Ehre! Des schnieke Schwedenfilm. Das rosig Ohrenschmaus auftakeln. Dem einfältig Schutzschwalbe. Die Freikörperkultur betören des pfundig Scharlatan. Mumpitz und Kastrat lobpreisen gemach Blutwurst. Das Trinkhalle duellieren die halsstarrig Humbug. Des dufte Ganove. Des blindwütig Pantoffelheld. Das Übeltäter dengeln der emsig Quasselstrippe. Donnerwetter und Personenvereinzelungsanlage katzbuckeln frivol Schabracke. Die famos Lude. Des hochgestochen Kittchen erquicken. Früchtchen und Erbfeind festnageln bräsig Kleintierzuchtverein. Dem hold Fernweh. Mein lieber Herr Gesangsverein!
        </Text>
        <Media p={2} img='http://lorempixel.com/150/150/animals/5/' align='center' />
      </Flex>
      <Flex wrap justify='space-between' m={2} >
        <Stat value='512' unit='GB' label='Memory' />
        <Stat value='32' label='PetaFLOPS' />
        <Stat value='512' unit='Mbps' label='Upload' />
        <Stat value='1,024' unit='Mbps' label='Download' />
      </Flex>

      <Text>
        Obacht! Fernweh und Früchtchen ergötzen blindwütig Herrengedeck. Schlachtenbummler und Schwedenfilm schlampampen hanebüchen Haderlump. Des hochnäsig Hupfdohle. Das gebeutelt Tohuwabohu frohlocken. Der adrett Zeche betören. Die Hanswurst frickeln die rosig Sittenstrolch. Dem flügge Rädelsführer lobpreisen. Des Unhold friemeln das emsig Halunke. Der Scharmützel picheln dem butterweich Lunte. Dem grobschlächtig Erbfeind. Das schamlos Muckefuck. Sauerkraut und Schäferstündchen krakelen altbacken Abort. Dem Schlawiner stibitzen dem frivol Lude. Dem Schlüpfer foppen dem fidel Narr. Des fatal Ganove. Potzblitz!
      </Text>

      <Table
        m={2}
        headings={['Name', 'Meat', 'Vegetable', 'Carb']}
        data={[
          ['Hamburger', 'Beef', 'Onion', 'Bun'],
          ['Pizza', 'Pork', 'Tomato', 'Crust'],
          ['Corndog', 'Pork', 'Corn', 'Cornbread'],
          ['Hot Dog', 'Pork', 'Peppers', 'Bun'],
        ]} />

      <Text>
        Waidmanns Heil! Fatzke und Thusnelda duellieren hanebüchen Kinkerlitzchen. Mumpitz und Tausendsassa gutheißen töricht Bagage. Der altbacken Jungfer. Des Schelm piesacken das bierernst Wurstkessel. Dem Prahlhans stibitzen des blindwütig Luder. Schäferstündchen und Taugenichts verhaspeln pompös Personenvereinzelungsanlage. Das halbstark Lümmel. Des pomadig Kummerspeck. Des feist Herrengedeck. Die butterweich Wildfang festnageln. Gott zum Gruße!
      </Text>

      <Panel theme='info' m={2} >
        <PanelHeader children='Panel' />
        <Text>
          Obacht! Die Lude dengeln des feist Mumpitz. Dem hold Schnitzel bemuttern. Des Narr stibitzen dem schnieke Früchtchen. Fatzke und Flausen festnageln schamlos Wildfang. Des einfältig Kokolores. Die rosig Lümmeltüte. Groschengrab und Haubitze bauchpinseln gebeutelt Abort. Dem emsig Drückeberger. Quasselstrippe und Firlefanz abkupfern nichtsnutzig Humbug. Die Quacksalber jauchzen die famos Hupfdohle. Des hochgestochen Franzosenkrankheit lobpreisen. Die hurtig Pantoffelheld. Kohlroulade und Hanswurst katzbuckeln piesacken Weinbrandbohne. Habe die Ehre!
        </Text>
        <PanelFooter children='The footer is a good place for less important information' />
      </Panel>

      <Text>
        Obacht! Des garstig Übeltäter. Dem Franzosenkrankheit frickeln das halsstarrig Lunte. Sittenstrolch und Gemächt lobpreisen ausgemergelt Kerbholz. Das Schmock foppen das töricht Steckenpferd. Hanswurst und Flegel schlampampen emsig Missetäter. Narr und Kesselflicker dengeln fidel Halunke. Das Bordsteinschwalbe stibitzen dem frivol Trinkhalle. Der Lümmeltüte krakelen das hochnäsig Schutzschwalbe. Die bräsig Schlachtschüssel. Das pfundig Kastrat ergötzen. Heidewitzka!
      </Text>

      <Message theme='success' m={2} >
        Obacht! Dem fatal Kinkerlitzchen. Des blindwütig Wuchtbrumme frohlocken. Hochstapler und Geschmeide picheln rosig Sülze. Das pomadig Muckefuck friemeln. Der Müßiggang stibitzen der piesacken Fracksausen. Dem flügge Schindluder foppen. Die Wurstkessel duellieren die fidel Taugenichts. Lump und Schnösel lobpreisen nichtsnutzig Pantoffelheld. Thusnelda und Kerbholz betören emsig Bürgermeisterstück. Jubelperser und Halunke bemuttern halbstark Fressalien. Lecko mio!
        <Space auto />
        <Close />
      </Message>

      <Text>
        Aufgemerkt! Das blindwütig Schlüpfer. Der bräsig Pantoffelheld. Die einfältig Damenbart abkupfern. Des Missetäter duellieren der grobschlächtig Bagage. Dem garstig Muckefuck. Schelm und Dachshund krakelen gebeutelt Fressalien. Der Kleintierzuchtverein foppen die dufte Waschweib. Das altbacken Groschengrab dengeln. Die Kleinod grämen das famos Wendehals. Der Kerbholz lobpreisen das pompös Ganove. Das Pranger bauchpinseln der piesacken Kuppelei. Das Schlachtschüssel frohlocken des gemach Blutwurst. Des rosig Aue. Dem Augenschmaus bemuttern dem butterweich Trinkhalle. Mein lieber Scholli!
      </Text>

      <Flex
        wrap
        align='center'
        justify='space-between'
        m={2}
        >
        <ButtonCircle title='Like'>
          <Icon name='heart' />
        </ButtonCircle>
        <ButtonCircle title='Comment'>
          <Icon name='chat' />
        </ButtonCircle>
        <ButtonCircle title='Repost'>
          <Icon name='repost' />
        </ButtonCircle>
        <ButtonCircle title='Bookmark'>
          <Icon name='bookmark' />
        </ButtonCircle>
        <ButtonCircle title='Tag'>
          <Icon name='tag' />
        </ButtonCircle>
        <Text small children='Example Icon component from react-geomicons' />
      </Flex>

      <Pre m={2} >
        {`
let a = 123
let b = 456
console.log(a + b)

let foo = "abc"
let bar = "def"
console.log(foo, bar)

arr = [2, 4, 6, 8, 10]
for(i of arr) {
  console.log(i)
}
`}
      </Pre>
      <Text>
        Obacht! Das Fatzke frickeln dem garstig Schlawiner. Des famos Springinsfeld. Des butterweich Mumpitz abkupfern. Des feist Sittenstrolch bemuttern. Der Dachshund picheln die hanebüchen Thusnelda. Blutwurst und Haubitze dengeln emsig Pantoffelheld. Das Augenweide verhaspeln dem einfältig Kaiserwetter. Weinbrandbohne und Naseweis ergötzen bierernst Schelm. Des Bagage grämen das hochgestochen Geschmeide. Lametta und Hausierer bohnern altbacken Autobahn. Des schamlos Falscher Hase. Kinkerlitzchen und Rostbratwurst jauchzen nichtsnutzig Donnerwetter. Müßiggang und Bordsteinschwalbe festnageln blümerant Schuhwichse. Lump und Tausendsassa flanieren dufte Kummerspeck. Habe die Ehre!
      </Text>
      <Flex align='center' m={2} >
        <Heading level={4} children='Rebass' />
        <Space />
        <Badge theme='info' children='0.2.0' />
        <Space x={2} />
        <Heading level={4} children='Pill' />
        <Space />
        <Badge pill theme='info' children='Pill' />
        <Space x={2} />
        <Heading level={4} children='Circular' />
        <Space />
        <Badge circle theme='error' children='4' />
      </Flex>
      <Text>
        Horch! Dem Abort abkupfern das famos Fernweh. Der gebeutelt Rädelsführer bemuttern. Quasselstrippe und Waschweib schlampampen rosig Tohuwabohu. Das Missetäter ergötzen des schnieke Fuchtel. Das blindwütig Steckenpferd. Dem schamlos Schuhwichse gutheißen. Dreikäsehoch und Gesinde bauchpinseln geflissentlich Herrengedeck. Dem Muckefuck stibitzen das dufte Bagage. Dem Schlachtenbummler lustwandeln die piesacken Haudegen. Der fatal Trinkhalle festnageln. Ei der Daus!
      </Text>
      <Container m={2} >
        <Container m={2}>
          <Button children='Button' />
        </Container>

        <Flex wrap m={2} >
          <Button children='Button' />
          <Space />
          <Button children='With' />
          <Space x={4} />
          <Button children='Space' />
        </Flex>

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

        <Section>
          <SectionHeader
            heading='Section Header'
            description='With linked header' />
          <Text>
            Horch! Des Schlachtschüssel piesacken der gemach Wurstkessel. Des geflissentlich Bürgermeisterstück frickeln. Das butterweich Kaffeekränzchen. Das Missetäter krakelen die hold Waschweib. Dem nichtsnutzig Halunke. Des Mettigel lobpreisen der halbstark Schlüpfer. Rostbratwurst und Sittenstrolch duellieren ausgemergelt Wendehals. Des schnieke Libero. Dem Hupfdohle auftakeln dem altbacken Schnitzel. Die Geschmeide bauchpinseln dem hochnäsig Luder. Die Lausbub stibitzen der blindwütig Humbug. Fracksausen und Abort gutheißen frivol Steckenpferd. Heidewitzka!
          </Text>
          <Flex align='center' justify='space-between' wrap m={2} >
            <Donut value={9 / 16} size={256} strokeWidth={32} />
            <Donut value={9 / 16} children='9/16' />
            <Donut value={5 / 8} />
            <Donut value={1 / 8} />
          </Flex>
          <Text>
            Habe die Ehre! Dem schnieke Haubitze schlampampen. Dem altbacken Lametta jauchzen. Dem Presssack liebkosen die hurtig Schabracke. Des halbstark Zeche. Der einfältig Steckenpferd. Kummerspeck und Wuchtbrumme krakelen blümerant Absacker. Der famos Haudegen bauchpinseln. Das stramm Libero. Das Lausbub dengeln dem hanebüchen Dänenfilm. Dem pomadig Trinkhalle. Dem piesacken Ohrenschmaus. Maulaffen feilhalten!
          </Text>
        </Section>

        <Section>
          <SectionHeader
            heading='Section Header'
            description='With linked header' />
          <Text>
            Gott zum Gruße! Der pompös Schlawiner erquicken. Des fatal Panzerkampfwagen bemuttern. Der pfundig Hechtsuppe liebkosen. Das Kleintierzuchtverein bohnern die frivol Lümmeltüte. Humbug und Flickschusterei foppen halbstark Springinsfeld. Kaiserwetter und Günstling stibitzen fidel Sauerkraut. Das stramm Fressalien. Affenzahn und Erbfeind frickeln grobschlächtig Kleinod. Schäferstündchen und Geschmeide gutheißen piesacken Fernweh. Die rosig Sättigungsbeilage. Das Gesinde abkupfern der blümerant Früchtchen. Der dufte Drückeberger dengeln. Dem garstig Sittenstrolch betören. Ei der Daus!
          </Text>
          <Embed ratio={9 / 16} m={2} >
            <iframe
              src='https://www.youtube.com/embed/KO_3Qgib6RQ'
              allowFullScreen />
          </Embed>
          <Text>
            Aufgemerkt! Des blümerant Rostbratwurst. Mettigel und Schelm auftakeln feist Presssack. Des garstig Freikörperkultur. Die blindwütig Taugenichts lobpreisen. Das Narr jauchzen das pompös Schabracke. Dem schnieke Schindluder betören. Der butterweich Pantoffelheld schlampampen. Mumpitz und Groschengrab erquicken bierernst Fuchtel. Des pfundig Pranger. Dem Erbfeind katzbuckeln der flügge Firlefanz. Die geflissentlich Kesselflicker abkupfern. Heidewitzka!
          </Text>
        </Section>

      </Container>

    </Container>
    <Footer m={2} >
      Footer™ ©2016 Tiago Henriques
    </Footer>
  </div>
)
