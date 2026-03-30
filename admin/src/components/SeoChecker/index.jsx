import React, { useState } from 'react';
import { Box, Typography, Divider, Flex, Button } from '@strapi/design-system';
import { unstable_useContentManagerContext as useContentManagerContext } from '@strapi/strapi/admin';

const SeoChecker = () => {
  // 1. Add state to toggle between tabs
  const [activeTab, setActiveTab] = useState('google');
  
  // 2. Grab live data
  const { form } = useContentManagerContext();
  const modifiedData = form?.values || {};

  const seo = modifiedData.seoData || {};
  const metaTitle = seo.metaTitle || 'Your Page Title Will Appear Here';
  const metaDescription = seo.metaDescription || 'Start typing a meta description to see how it will look...';
  
  // 3. Grab the live image URL if an image was uploaded
  const imageUrl = seo.metaImage?.url || null;

  const isTitleTooLong = metaTitle.length > 60;
  const isDescTooLong = metaDescription.length > 160;

  return (
    <Box background="neutral0" padding={4} hasRadius shadow="filterShadow" marginTop={4}>
      <Typography variant="sigma" textColor="neutral600">SEO & Social Preview</Typography>
      
      {/* 4. Tab Buttons */}
      <Flex gap={2} marginTop={3} marginBottom={3}>
        <Button 
          size="S" 
          variant={activeTab === 'google' ? 'default' : 'secondary'} 
          onClick={() => setActiveTab('google')}
        >
          Google
        </Button>
        <Button 
          size="S" 
          variant={activeTab === 'social' ? 'default' : 'secondary'} 
          onClick={() => setActiveTab('social')}
        >
          Social (Twitter/FB)
        </Button>
      </Flex>

      <Box paddingBottom={4}>
        <Divider />
      </Box>

      {/* 5. Conditional Rendering based on the active tab */}
      {activeTab === 'google' ? (
        <Box>
          <Typography variant="pi" textColor={isTitleTooLong ? 'danger600' : 'primary600'} fontWeight="bold" style={{ fontSize: '18px', textDecoration: 'none' }}>
            {metaTitle}
          </Typography>
          <br />
          <Typography variant="pi" textColor="success600" style={{ fontSize: '14px' }}>
            https://yoursite.com/your-url-slug
          </Typography>
          <br />
          <Typography variant="omega" textColor={isDescTooLong ? 'danger600' : 'neutral800'} style={{ fontSize: '14px', lineHeight: '1.4' }}>
            {metaDescription}
          </Typography>
        </Box>
      ) : (
        <Box background="neutral100" hasRadius overflow="hidden" borderStyle="solid" borderWidth="1px" borderColor="neutral200">
          {imageUrl ? (
            <img src={imageUrl} alt="Social Preview" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          ) : (
            <Box style={{ width: '100%', height: '150px', backgroundColor: '#eaeaeb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="pi" textColor="neutral600">No image uploaded</Typography>
            </Box>
          )}
          <Box padding={3}>
            <Typography variant="pi" textColor="neutral500" style={{ fontSize: '12px', textTransform: 'uppercase' }}>yoursite.com</Typography>
            <br />
            <Typography variant="pi" textColor="neutral800" fontWeight="bold" style={{ fontSize: '16px', lineHeight: '1.2', marginTop: '4px', display: 'block' }}>
              {metaTitle}
            </Typography>
            <Typography variant="omega" textColor="neutral600" style={{ fontSize: '14px', lineHeight: '1.4', marginTop: '4px', display: 'block' }}>
              {metaDescription}
            </Typography>
          </Box>
        </Box>
      )}

      {/* Character Counters */}
      <Box marginTop={4}>
         <Typography variant="pi" textColor={isTitleTooLong ? 'danger600' : 'neutral600'}>
            Title: {metaTitle.length}/60
         </Typography>
         <br />
         <Typography variant="pi" textColor={isDescTooLong ? 'danger600' : 'neutral600'}>
            Description: {metaDescription.length}/160
         </Typography>
      </Box>
    </Box>
  );
};

export default SeoChecker;