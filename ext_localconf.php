<?php
if (!defined ('TYPO3_MODE')) die ('Access denied.');

// Include TypoScript configuration.
t3lib_extMgm::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/TSconfig/Page.ts">');

?>