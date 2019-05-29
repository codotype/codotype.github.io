# Runtime

Codotype Generators by themselves are little more than templates and functions that pass data into them - all of the heavy-lifting is done by [@codotype/runtime](https://github.com/codotype.codotype).

## Overview

The Codotype **Runtime** is responsible for all filesystem reading and writing - if the generator is the dehydrated precursor, the runtime is what adds water. The **Runtime** implements a series of methods that are passed down to each generator, thus fully decoupling the generator from the environment in which it's being run. This separation allows generators to be run on a server or from the commandline - you can see the [@codotype/cli](https://github.com/codotype/codotype) repository to see how the runtime registers and runs generators.
