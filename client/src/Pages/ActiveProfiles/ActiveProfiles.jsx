import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { buttonStyles } from '../../Constants/Css';



const useStyles = makeStyles((theme) => ({
    btnStyles: buttonStyles,

    page: {
        display : "flex",
        flexDirection : 'column',
        alignItems : "center",
        justifyContent : "space-around",

    },
    

  }));
export default function ActiveProfiles() {
  const classes = useStyles();
  return (
    <div>
        <div className="working-profiles-container">
        <div className="working-profiles-working-profiles">
          <img
            src="public/external/rectangle42431-wz1-400h.png"
            alt="Rectangle42431"
            className="working-profiles-rectangle4"
          />
          <div className="working-profiles-frame7">
            <span className="working-profiles-text">
              <span>Active Profiles</span>
            </span>
          </div>
          <div className="working-profiles-group1">
            <div className="working-profiles-product">
              <div className="working-profiles-frame6">
                <img
                  src="public/external/image71mmjnwzcml12431-458-200w.png"
                  alt="IMAGE71MmJNwZcML12431"
                  className="working-profiles-image71mm-jnw-zc-ml1"
                />
              </div>
              <div className="working-profiles-content">
                <div className="working-profiles-header">
                  <div className="working-profiles-title-subtitle">
                    <span className="working-profiles-text02 textSmRegular">
                      <span>Position</span>
                    </span>
                    <span className="working-profiles-text04 textXlMedium">
                      <span>Name</span>
                    </span>
                  </div>
                </div>
                <img
                  src="public/external/divider2431-z7zg.svg"
                  alt="Divider2431"
                  className="working-profiles-divider"
                />
                <div className="working-profiles-details">
                  <span className="working-profiles-text06 textSmRegular">
                    <span>Description</span>
                  </span>
                  <span className="working-profiles-text08 textSmRegular">
                    <span>Descrition</span>
                  </span>
                </div>
                <img
                  src="public/external/divider2431-qay.svg"
                  alt="Divider2431"
                  className="working-profiles-divider1"
                />
              </div>
            </div>
            <div className="working-profiles-product1">
              <div className="working-profiles-frame61">
                <img
                  src="public/external/image71mhtd3ul4l12431-g5u-200w.png"
                  alt="IMAGE71MHTD3uL4L12431"
                  className="working-profiles-image71mhtd3u-l4l1"
                />
              </div>
              <div className="working-profiles-content1">
                <div className="working-profiles-header1">
                  <div className="working-profiles-title-subtitle1">
                    <span className="working-profiles-text10 textSmRegular">
                      <span>Position</span>
                    </span>
                    <span className="working-profiles-text12 textXlMedium">
                      <span>Name</span>
                    </span>
                  </div>
                </div>
                <img
                  src="public/external/divider2431-ueve.svg"
                  alt="Divider2431"
                  className="working-profiles-divider2"
                />
                <div className="working-profiles-details1">
                  <span className="working-profiles-text14 textSmRegular">
                    <span>Description</span>
                  </span>
                  <span className="working-profiles-text16 textSmRegular">
                    <span>Descrition</span>
                  </span>
                </div>
                <img
                  src="public/external/divider2431-drsi.svg"
                  alt="Divider2431"
                  className="working-profiles-divider3"
                />
              </div>
            </div>
            <div className="working-profiles-product2">
              <div className="working-profiles-frame62">
                <img
                  src="public/external/image71csvrtbsl12431-16zg-200w.png"
                  alt="IMAGE71cSVRTBSL12431"
                  className="working-profiles-image71c-svrtbsl1"
                />
              </div>
              <div className="working-profiles-content2">
                <div className="working-profiles-header2">
                  <div className="working-profiles-title-subtitle2">
                    <span className="working-profiles-text18 textSmRegular">
                      <span>Position</span>
                    </span>
                    <span className="working-profiles-text20 textXlMedium">
                      <span>Name</span>
                    </span>
                  </div>
                </div>
                <img
                  src="public/external/divider2431-qk02.svg"
                  alt="Divider2431"
                  className="working-profiles-divider4"
                />
                <div className="working-profiles-details2">
                  <span className="working-profiles-text22 textSmRegular">
                    <span>Description</span>
                  </span>
                  <span className="working-profiles-text24 textSmRegular">
                    <span>Descrition</span>
                  </span>
                </div>
                <img
                  src="public/external/divider2431-wt5.svg"
                  alt="Divider2431"
                  className="working-profiles-divider5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
