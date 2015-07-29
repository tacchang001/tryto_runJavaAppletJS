#!/bin/sh
javac -d . VMInfo.java
jar -cvfm VMInfo.jar VMInfo.mf VMInfo.class
rm VMInfo.class
