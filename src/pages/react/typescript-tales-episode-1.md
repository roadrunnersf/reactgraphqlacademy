---
title: A TypeScript tale - episode 1
date: 2019-08-12
subtitle: The first of a series of articles about TypeScript
author: francisco
imageUrl:
order:
---

Anyone learning programming for the first time will have to understand types early on. They are everywhere. After all, every value has a type. And what would it be a programming language without a value?

Apart from being a Software Engineer at Sainsbury's (UK), I'm also a coach at [React GraphQL Academy](https://reactgraphql.academy/), where we teach professional developers from all over the world. Often we do an introduction to [TypeScript](https://www.typescriptlang.org/) and many of our students end up making several questions that go beyond TypeScript and into a more general realm. And that's the reason I thought about writing more in-depth materials for everyone. I could have gone straight to more advanced topics such as design patterns but I found it important to dig into the TypeScript fundamentals. Not that I'm going to write a dissertation about primitive types. For that you've got the official TypeScript documentation plus many other resources. But I'll touch the subjects I find important for you to get off to a good start with the language.

## On this article:

- [What is a type system?](#what-is-a-type-system)
- [Why do we use type systems?](#why-do-we-use-type-systems)
- [Do they replace tests?](#do-they-replace-tests)
- [What can we do to introduce a type system in a JavaScript project?](#what-can-we-do)

## What is a type system? <a name="what-is-a-type-system"></a>

> _"A type is a syntactic method for enforcing levels of abstraction in programs. The study of type systems, and of programming languages from a type-theoretic perspective, has important applications in software engineering, language design, high-performance compilers, and security." Benjamin C. Pierce_

A type system is a set of rules that add a type property to many of the building blocks of a programming language such as expressions and variables. Its main goal is bug prevention in the code base by expressing type errors at compile time.

## Why do we use type systems? <a name="why-do-we-use-type-systems"></a>

I'm not going to try to convince you to use a type system. My feeling is that if you've read until this point, you're thinking about it already or, at least, considering it.

Weakly/dynamic typed languages such as JavaScript exist that way for a reason. Their looseness might give you more flexibility and allows you to move at an (arguably) faster speed since we don't need to be worried about verbose declarations and expressions. But at what cost?

> In an age where TDD is highly valuable and a foundation of modern JavaScript development, we need to take into consideration any possible additional steps that might increase our degree of confidence in our code.

A type system, opposite of what some might think, doesn't keep you entirely safe from trouble. It doesn't make you immune from making errors. However, it gives you more confidence in your code. Being explicit about your intentions when writing code, not only, increases your confidence, but also has the following advantages:

- Makes your code easier to understand and reason about
- Helps developers workflow since the very first line
- Is a form of self-documentation

## Do they replace tests? <a name="do-they-replace-tests"></a>

Not at all. For years we've been using (and very well) Mike Cohn's Agile Testing Pyramid as a concept for Agile development teams. In a nutshell this method allows projects to grow with confidence and minimise technical debt.

But in 2018, Kent C. Dodds came up with a new representation of the classic pyramid where static types are at the base of it. It's called "The Testing Trophy".

> _"Catch typos and type errors as you write the code." Kent C. Dodds_

A new layer was added to the traditional method. A new category of testing that spares the burden of writing verbose and inefficient unit tests that could be caught with a type system. The Testing Trophy challenged a set of rules that might not apply anymore to modern development techniques.

And what does Test Driven Development has in common with static typing? The fact that we must plan ahead. What arguments will this function accept? What will it return? Automating this whole process means you will have a better understanding of the code base and a better basis for future features and possible refactors.

## What can we do to introduce a type system in a JavaScript project? <a name="what-can-we-do"></a>

Two of the options are Flow and TypeScript. Whilst both of them have their own buzz within the community, they are actually pretty different.

**Flow** was developed by Facebook and it's a Static Type Checker for JavaScript written in **OCaml**. Since it's not a language, it can be smoothly integrated with JavaScript. Although it's a fast and reliable tool, it lost traction to TypeScript in the last couple of years. Especially due to the awesome community support TypeScript offers.

**TypeScript** is a superset of JavaScript and its created and maintained by Microsoft. As a language on its own, it has been designed to offer JavaScript the typing system it was missing. It provides compile time type validation and will not allow our code to compile if there's any typing errors. It has huge community support not only in the forms of "how-to"s and documentation but also with declaration files (which we will have a look at later in this series). It also has great IDE support with [Visual Studio Code](https://code.visualstudio.com/) (guess who created it? Microsoft.) making it sometimes a life-saver with its intuitive integration.

I don't want to say too much more about TypeScript in this introduction; there are lots of articles already about the history and development of TypeScript. I'd rather follow up with a series of practical guides on how to use it. Hope I see you soon.
