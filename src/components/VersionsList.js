import { useEffect, useState } from 'react';
import styles from './VersionsList.module.css';
import Connect from '../API/Connect';
import VersionCard from './VersionCard';

export default function VersionsList() {
  const [versions, setVersions] = useState([]);

  const userAgentVersion = navigator.userAgent.match(/Chrome\/(\d+\.\d+)/)[1]

  useEffect(() => {
    async function fetchVersions() {
      const versionsData = await Connect();

      const latestVersions = versionsData.reduce((acc, versionObj) => {
        const versionMajorMinor = versionObj.version.split('.').slice(0, 2).join('.');

        if (!acc[versionMajorMinor] || versionObj.version > acc[versionMajorMinor].version) {
          acc[versionMajorMinor] = versionObj;
        }
        return acc;
      }, {});

      setVersions(Object.values(latestVersions));
    }

    fetchVersions();
  }, []);

  return (
    <div className={styles.versionsList}>
      <h2>Download Chromedriver:</h2>
     {(versions && versions.length > 0) ? versions.map((version, index) => {
        const rootVersion = version.version.split('.').slice(0, 2).join('.');
        const isSameVersion = userAgentVersion === rootVersion;
        
        if (version.downloads.chromedriver) { 
          return (
            <VersionCard 
              text={rootVersion}
              link={version.downloads.chromedriver[3].url} 
              key={index} 
              sameVersion={isSameVersion}
            />
          )}
        }) 
      : <h4>Loading</h4>}
    </div>
  );
}
