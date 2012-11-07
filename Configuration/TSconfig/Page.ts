
/**
 * tx_gridelements
 */
tx_gridelements.setup.tx_adxgridelementsflexslider {

	title = LLL:EXT:adx_gridelements_flexslider/Resources/Private/Language/locallang.xlf:title
	description = LLL:EXT:adx_gridelements_flexslider/Resources/Private/Language/locallang.xlf:description
	flexformDS = FILE:EXT:adx_gridelements_flexslider/Configuration/FlexForm/DS.xml
	icon = EXT:adx_gridelements_flexslider/Resources/Public/Icons/24x24/Slider.gif,EXT:adx_gridelements_flexslider/Resources/Public/Icons/16x16/Slider.gif
	frame = 3

	config {

		colCount = 1
		rowCount = 1

		rows {
			1 {
				columns {
					1 {
						name = LLL:EXT:adx_gridelements_flexslider/Resources/Private/Language/locallang.xlf:columnName.0
						colPos = 0
					}
				}
			}
		}
	}
}