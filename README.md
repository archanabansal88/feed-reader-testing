# Udacity - Feedreader Testing

## Project Overview

In this project we are given a web-based application that reads RSS feeds.This project uses jasmine to test the functionality of a feed reader website. 

## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have! 

## Tests

RSS Feeds:
* Test to make sure that the allFeeds variable has been defined and that it is not empty
* Test loops through each feed in the allFeeds object and ensures that the URL is defined and it is not empty.
* Test loops through each feed in the allFeeds object and ensures that the name is defined and it is not empty.

The Menu:
* Test ensures that the menu element is hidden by default
* Test ensures that the menu icon toggles visibility(hide/show) on click

Initial Entries:
* Test ensures that when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

New Feed Selection:
* Test ensures that when a new feed is loaded by the loadFeed function, the content actually changes.