---
title: 如何在 React 中使用 Styled-Components 
date: 2021-02-06 17:55:53
cover: https://w.wallhaven.cc/full/3z/wallhaven-3zkqoy.jpg
tags:
    - styled-components 
categories:
    - 前端    
---

## 前言

尽管组件驱动的方法在构建Web应用程序的方式上迎来了一个新的领域，但它并非没有缺陷-一个就是它在CSS中的可用性和可伸缩性。 这催生了一种以特定于组件的方式构造和管理样式的新方法，即CSS-in-JS。

styled-components是一种CSS-in-JS工具，可桥接组件和样式之间的鸿沟，并提供许多功能，使您可以以功能性和可重用的方式启动和运行styled-components。在本文中，您将学习styled-components的基础知识以及如何将其正确地应用于React应用程序。在学习本教程之前，您应该已经在React上工作。如果您在样式化React组件时需要各种选择，可以查看我们之前关于该主题的文章。

CSS的核心是能够全局定位任何HTML元素，无论其在DOM树中的位置如何。当与组件一起使用时，这可能是一个障碍，因为组件在合理的程度上要求托管（即保持状态和样式之类的资产）更靠近使用它们的位置（称为本地化）。

用React自己的话说，样式化的组件是“组件的可视基元”，其目的是为我们提供一种灵活的样式来对组件进行样式化。结果是组件及其样式之间紧密耦合。

注意：样式化的组件可用于React和React Native，虽然您一定应该阅读React Native指南，但我们的重点是React的styled-components。

## 为什么选择 Styled Components

除了帮助您确定范围样式外，带样式的组件还包括以下功能：

- 供应商自动前缀
    您可以使用标准CSS属性，样式化的组件将在需要时添加供应商前缀。
- 唯一的 className
    样式化的组件彼此独立，您不必担心它们的名称，因为库可以为您处理。
- 删除没使用的样式
    样式化的组件会删除未使用的样式，即使它们已在代码中声明也是如此。
- [and more](https://styled-components.com/docs/basics#motivation)


## 安装

Installing styled components is easy. You can do it through a CDN or with a package manager such as Yarn…

yarn add styled-components
Copy
… or npm:

npm i styled-components
Copy
Our demo uses create-react-app.

## 起步

也许您会注意到styled-components的第一件事是它们的语法，如果您不了解styled-components背后的魔力，这可能会令人生畏。 简而言之，styled-components使用JavaScript的模板文字来缩小组件和样式之间的差距。 因此，当您创建styled-components时，您实际创建的是具有样式的React组件。 看起来像这样：


```jsx
import styled from "styled-components";

// Styled component named StyledButton
const StyledButton = styled.button`
  background-color: black;
  font-size: 32px;
  color: white;
`;

function Component() {
  // Use it like any other component.
  return <StyledButton> Login </StyledButton>;
}
```

在此，StyledButton是样式化的组件，它将被呈现为包含样式的HTML按钮。 styled是一种内部实用程序方法，可将样式从JavaScript转换为实际的CSS。

在原始HTML和CSS中，我们将具有以下内容：

```jsx
button {
  background-color: black;
  font-size: 32px;
  color: white;
}

<button> Login </button>
```

如果样式化的组件是React组件，我们可以使用props吗？ 我们可以。

## Props


样式化的组件具有功能性，因此我们可以轻松地对元素进行动态样式化。 假设我们页面上有两种类型的按钮，一种是黑色背景，另一种是蓝色。 我们不必为它们创建两个样式化的组件。 我们可以根据他们的props来调整他们的样式。

```jsx
import styled from "styled-components";

const StyledButton = styled.button`
  min-width: 200px;
  border: none;
  font-size: 18px;
  padding: 7px 10px;
  /* The resulting background color will be based on the bg props. */
  background-color: ${props => props.bg === "black" ? "black" : "blue";
`;

function Profile() {
  return (
    <div>
      <StyledButton bg="black">Button A</StyledButton>
      <StyledButton bg="blue">Button B</StyledButton>
    </div>
  )
}
```

因为StyledButton是一个接受props的React组件，所以我们可以根据bg prop的存在或值来分配不同的背景颜色。

不过，您会注意到，我们尚未为按钮指定类型。 让我们这样做：

```jsx
function Profile() {
  return (
    <>
      <StyledButton bg="black" type="button">
        Button A
      </StyledButton>
      <StyledButton bg="blue" type="submit" onClick={() => alert("clicked")}>
        Button B
      </StyledButton>
    </>
  );
}

```


样式化的组件可以区分它们收到的props类型。 他们知道类型是HTML属性，因此实际上在他们自己的处理过程中使用bg属性时，会渲染<button type =“ button”>按钮A </ button>。 注意我们也是如何附加事件处理程序的吗？

说到属性，扩展语法使我们可以使用attrs构造函数管理props。 看一下这个：


```jsx
const StyledContainer = styled.section.attrs((props) => ({
  width: props.width || "100%",
  hasPadding: props.hasPadding || false,
}))`
  --container-padding: 20px;
  width: ${(props) => props.width}; // Falls back to 100%
  padding: ${(props) =>
    (props.hasPadding && "var(--container-padding)") || "none"};
`;
```

注意设置宽度时我们不需要三元组吗？ 那是因为我们已经为它设置了一个默认的宽度：props.width ||。 “ 100％”。 另外，我们使用CSS自定义属性是因为可以！

注意：如果样式化的组件是React组件，并且我们可以传递props，那么我们也可以使用状态吗？ 图书馆的GitHub帐户有一个问题可以解决。


## 扩展样式
假设您正在处理一个登录页，并且您已经将容器设置为某个最大宽度，以保持内容居中。你有一个StyledContainer：

```jx
const StyledContainer = styled.section`
  max-width: 1024px;
  padding: 0 20px;
  margin: 0 auto;
`;
```
然后，您发现需要一个较小的容器，在其两边填充10个像素，而不是20个像素。您的第一个想法可能是创建另一个样式化的组件，这是正确的，但是并不需要花费任何时间即可意识到您正在复制样式。

```jsx

const StyledContainer = styled.section`
  max-width: 1024px;
  padding: 0 20px;
  margin: 0 auto;
`;

const StyledSmallContainer = styled.section`
  max-width: 1024px;
  padding: 0 10px;
  margin: 0 auto;
`;
```

像上面的代码片段一样，在继续创建StyledSmallContainer之前，让我们学习重用和继承样式的方法。它或多或少类似于点差运算符的工作方式：

```jsx
const StyledContainer = styled.section`
  max-width: 1024px;
  padding: 0 20px;
  margin: 0 auto;
`;

// Inherit StyledContainer in StyledSmallConatiner
const StyledSmallContainer = styled(StyledContainer)`
  padding: 0 10px;
`;

function Home() {
  return (
    <StyledContainer>
      <h1>The secret is to be happy</h1>
    </StyledContainer>
  );
}

function Contact() {
  return (
    <StyledSmallContainer>
      <h1>The road goes on and on</h1>
    </StyledSmallContainer>
  );
}

```

在StyledSmallContainer中，您将从StyledContainer中获得所有样式，但是填充将被覆盖。请记住，通常，您会为StyledSmallContainer渲染一个section元素，因为这就是StyledContainer渲染的内容。但这并不意味着它是刻在石头上或不可改变的。

## THE “AS” POLYMORPHIC PROP

使用as多态props，您可以交换要渲染的end元素。一个用例是继承样式（如上例所示）。例如，如果您希望在StyledSmallContainer的某个部分中使用div，则可以使用首选元素的值将as prop传递给styled-components，如下所示：

```jsx
function Home() {
  return (
    <StyledContainer>
      <h1>It’s business, not personal</h1>
    </StyledContainer>
  );
}

function Contact() {
  return (
    <StyledSmallContainer as="div">
      <h1>Never dribble when you can pass</h1>
    </StyledSmallContainer>
  );
}
```

现在，StyledSmallContainer将呈现为div。您甚至可以将自定义组件作为您的值：

```jsx
function Home() {
  return (
    <StyledContainer>
      <h1>It’s business, not personal</h1>
    </StyledContainer>
  );
}

function Contact() {
  return (
    <StyledSmallContainer as={StyledContainer}>
      <h1>Never dribble when you can pass</h1>
    </StyledSmallContainer>
  );
}
```

不要认为这是理所当然的。

## SCSS-LIKE SYNTAX

CSS预处理器Stylis使样式化的组件能够支持类似于SCSS的语法，例如嵌套：

```jsx

const StyledProfileCard = styled.div`
  border: 1px solid black;

  > .username {
    font-size: 20px;
    color: black;
    transition: 0.2s;

    &:hover {
      color: red;
    }

    + .dob {
      color: grey;
    }
  }
`;

function ProfileCard() {
  return (
    <StyledProfileCard>
      <h1 className="username">John Doe</h1>
      <p className="dob">
        Date: <span>12th October, 2013</span>
      </p>
      <p className="gender">Male</p>
    </StyledProfileCard>
  );
}
```

## 动画 

styled-components具有关键帧帮助器，可帮助构建（可重复使用的）动画关键帧。这样做的好处是，关键帧将与样式化的组件分离，并且可以在需要时导出和重用。

```jsx
import styled, {keyframes} from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Toast = styled.div`
  animation: ${slideIn} 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
  border-radius: 5px;
  padding: 20px;
  position: fixed;
`;
```

## GLOBAL STYLING

虽然CSS-in-JS以及扩展的styled-components的最初目标是确定样式范围，但我们还可以利用styled-components的全局样式。由于我们主要使用的是范围样式，因此您可能会认为这是不变的出厂设置，但那是错误的。考虑一下：真正的作用域是什么？从技术上讲，以全球样式的名义，我们可以做类似的事情：

```jsx
ReactDOM.render(
  <StyledApp>
    <App />
  </StyledApp>,
  document.getElementById("root")
);
```

但是我们已经有了一个辅助函数createGlobalStyle，其唯一存在的原因是全局样式。那么，为什么要否认它的责任呢？

我们可以使用createGlobalStyle的一件事是标准化CSS：

```jsx

import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Your css reset here */
`;

// Use your GlobalStyle
function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes />
    </div>
  );
}
```

注意：使用createGlobalStyle创建的样式不接受任何子代。在文档中了解更多信息。

在这一点上，您可能想知道为什么我们应该完全使用createGlobalStlye。原因如下：

- 如果没有根渲染，我们将无法定位任何对象（例如html，body等）。
- createGlobalStyle会注入样式，但不会渲染任何实际元素。如果您仔细查看最后一个示例，您会发现我们没有指定任何要呈现的HTML元素。这很酷，因为我们实际上可能不需要该元素。毕竟，我们关注整体风格。我们针对的是选择器，而不是特定的元素。
- createGlobalStyle没有范围，可以在我们的应用中的任何位置呈现，并且只要它在DOM中就适用。考虑概念，而不是结构。


```jsx
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Your css reset here */

  .app-title {
    font-size: 40px;
  }
`;

const StyledNav = styled.nav`
    /* Your styles here */
`;

function Nav({children}) {
  return (
    <StyledNav>
      <GlobalStyle />
      {children}
    </StyledNav>
  );
}

function App() {
  return (
    <div>
      <Nav>
        <h1 className="app-title">STYLED COMPONENTS</h1>
      </Nav>
      <Main />
      <Footer />
    </div>
  );
}
```

如果考虑结构，则不应将App-title的样式设置为GlobalStyle中设置的样式。但这不是那样的。无论您选择在何处呈现GlobalStyle，都会在呈现组件时注入它。

请注意：createGlobalStyles仅在DOM中以及在DOM中时才会渲染。

## CSS HELPER


我们已经了解了如何根据props来调整样式。如果我们想走得更远怎么办？ CSS帮助器功能有助于实现这一目标。假设我们有两个文本输入字段，它们的状态分别为：空和活动，分别具有不同的颜色。我们可以完成这个：

```jsx
const StyledTextField = styled.input`
  color: ${(props) => (props.isEmpty ? "none" : "black")};
`;
```

一切都好。随后，如果我们需要添加其他填充状态，则必须修改样式：

```jsx
const StyledTextField = styled.input`
  color: ${(props) =>
    props.isEmpty ? "none" : props.active ? "purple" : "blue"};
`;
```

现在，三元运算越来越复杂。如果稍后我们在文本输入字段中添加其他状态怎么办？或者，如果我们想为每个州提供除颜色以外的其他样式，该怎么办？您能想象将样式限制为三元运算吗？ CSS助手会派上用场。

```jsx
const StyledTextField = styled.input`
  width: 100%;
  height: 40px;

  ${(props) =>
    (props.empty &&
      css`
        color: none;
        backgroundcolor: white;
      `) ||
    (props.active &&
      css`
        color: black;
        backgroundcolor: whitesmoke;
      `)}
`;
```

我们所做的就是对我们的三元语法进行了某种扩展，以适应更多样式，并且语法更加易于理解和组织。如果上一条语句看起来不对，那是因为代码试图做太多事情。因此，让我们退后一步，进行完善：

```jsx
const StyledTextField = styled.input`
width: 100%;
height: 40px;

// 1. Empty state
${(props) =>
  props.empty &&
  css`
    color: none;
    backgroundcolor: white;
  `}

// 2. Active state
${(props) =>
  props.active &&
  css`
    color: black;
    backgroundcolor: whitesmoke;
  `}

// 3. Filled state
${(props) =>
  props.filled &&
  css`
    color: black;
    backgroundcolor: white;
    border: 1px solid green;
  `}
`;
```

我们的改进将样式划分为三个不同的易于管理和理解的块。这是一场胜利。


## STYLESHEETMANAGER

与CSS助手一样，StyleSheetManager是用于修改样式处理方式的助手方法。它需要某些props（例如disableVendorPrefixes（可以查看完整列表）），可以帮助您从子树中选择供应商前缀。

```jsx

import styled, {StyleSheetManager} from "styled-components";

const StyledCard = styled.div`
  width: 200px;
  backgroundcolor: white;
`;

const StyledNav = styled.div`
  width: calc(100% - var(--side-nav-width));
`;

function Profile() {
  return (
    <div>
      <StyledNav />
      <StyleSheetManager disableVendorPrefixes>
        <StyledCard> This is a card </StyledCard>
      </StyleSheetManager>
    </div>
  );
}
```

disableVendorPrefixes作为props传递给<StyleSheetManager>。因此，将禁用由<StyleSheetManager>包装的styled-components，但不会禁用<StyledNav>中的styled-components。

## EASIER DEBUGGING

当向一位同事介绍styled-components时，他们的抱怨之一就是很难在DOM或React Developer Tools中找到渲染的元素。这是styled-components的缺点之一：在尝试提供唯一的类名时，它会为元素分配唯一的哈希值，而这些哈希值恰好是神秘的，但它使displayName易于阅读，从而易于调试。

```jsx
import React from "react";
import styled from "styled-components";
import "./App.css";

const LoginButton = styled.button`
  background-color: white;
  color: black;
  border: 1px solid red;
`;

function App() {
  return (
    <div className="App">
      <LoginButton>Login</LoginButton>
    </div>
  );
}

```

默认情况下，样式化的组件将LoginButton呈现为DOM中的<button class =“ LoginButton-xxxx xxxx”> Login </ button>，并在React Developer Tools中呈现为LoginButton，这使调试更加容易。如果我们不希望出现这种情况，可以切换displayName布尔值。这需要Babel配置。

注意：在文档中，指定了软件包babel-plugin-styled-components以及一个.babelrc配置文件。问题在于，由于我们使用的是create-react-app，因此除非弹出，否则我们无法配置很多东西。这是Babel宏出现的地方。

我们需要使用npm或Yarn安装babel-plugin-macros，然后在应用程序的根目录下创建babel-plugin-macros.config.js，内容如下：

```js
module.exports = {
  styledComponents: {
    displayName: true,
    fileName: false,
  },
};
```

反转fileName值后，displayName将以文件名作为前缀，以实现更加独特的精度。

现在，我们还需要从宏导入：

```jsx
// Before
import styled from "styled-components";

// After
import styled from "styled-components/macro";

```

## 总结

现在，您可以以编程方式编写CSS，因此不要滥用自由。尽其所能，尽最大努力保持样式化的组件的理智。不要尝试编写繁琐的条件，也不要假设每件事都应该是样式化的组件。另外，不要为您只是猜在指日可待的用例创建新生的styled-components而过分抽象。

## 资源

- [文档](https://styled-components.com/docs)
- [来源](https://www.smashingmagazine.com/2020/07/styled-components-react/)